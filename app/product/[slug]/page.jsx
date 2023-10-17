import Image from "next/image";
import { client, urlFor } from "@/lib/client";

export const generateStaticParams = async () => {
  const query = `*[_type == "product"]{slug{current}}`;
  const products = await client.fetch(query);
  return products.map((product) => ({
    slug: product.slug.current,
  }));
};
async function getProductDetails(slug) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]`;
  const details = await client.fetch(query);
  return details;
}

async function getProducts(slug) {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);
  return products;
}
const ProductDetails = async ({ params }) => {
  const { slug } = params;
  const details = await getProductDetails(slug);
  const products = await getProducts(slug);
  // console.log(details);

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <Image
              src={urlFor(details.image && details.image[0])}
              alt="product"
              width={450}
              height={450}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
