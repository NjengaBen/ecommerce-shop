import { client } from "@/lib/client";
import getStripe from "@/lib/getStripe";
import toast from "react-hot-toast";
export async function getProductDetails(slug) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]`;
  const productDetails = await client.fetch(query);
  return productDetails;
}

export async function getProducts(slug) {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);
  return products;
}

export async function getCheckoutItems() {
  const stripe = await getStripe();
  const response = await fetch("/api/stripe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartItems),
  });
  if (response.statuscode === 500) return;
  const data = await response.json();
  toast.loading("Redirecting...");
  stripe.redirectToCheckout({ sessionId: data.id });
}
