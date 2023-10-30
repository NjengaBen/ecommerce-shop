import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
// export async function POST(req, res) {
//   if (req.method === "POST") {
//     console.log(req.body.cartItems);
//     try {
//       const params = {
//         submit_type: "pay",
//         payment_method_types: ["card"],
//         billing_address_collection: "auto",
//         shipping_options: [
//           { shipping_rate: "shr_1O3VS9EDncU7qHk40a90T7LD" },
//           { shipping_rate: "shr_1O3VUBEDncU7qHk4TmTzkHmh" },
//         ],
//         line_items: [
//           {
//             // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//             price: $80,
//             quantity: 1,
//           },
//         ],
//         mode: "payment",
//         success_url: `${req.headers.origin}/?success=true`,
//         cancel_url: `${req.headers.origin}/?canceled=true`,
//       };
//       // Create Checkout Sessions from body params.
//       const session = await stripe.checkout.sessions.create(params);
//       NextResponse.redirect(303, session.url);
//     } catch (err) {
//       // res.status(err.statusCode || 500).json(err.message);
//       NextResponse.json(err.message);
//     }
//   } else {
//     res.setHeader("Allow", "POST");
//     NextResponse.json({ message: "Only POST requests allowed" });
//     // res.status(405).end("Method Not Allowed");
//   }
// }

export async function POST(req, res) {
  const body = await req.json();
  try {
    if (body.length > 0) {
      const params = {
        submit_type: "pay",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1O3VS9EDncU7qHk40a90T7LD" },
          { shipping_rate: "shr_1O3VUBEDncU7qHk4TmTzkHmh" },
        ],
        line_items: body.map((item) => {
          const img = item.image[0].asset._ref;
          const newImage = img
            .replace(
              "image-",
              "https://cdn.sanity.io/images/1jvg14bi/production/"
            )
            .replace("webp-", ".webp");
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        mode: "payment",
        success_url: `${req.headers.get("origin")}/?success=true`,
        cancel_url: `${req.headers.get("origin")}/?canceled=true`,
      };
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      // NextResponse.redirect(303, session.url);
      return NextResponse.json({ session });
    } else {
      return NextResponse.json({ message: "No Data Found" });
    }
  } catch (err) {
    // res.status(err.statusCode || 500).json(err.message);
    return NextResponse.json(err.message);
  }
}
