import Image from "next/image";
import { client, urlFor } from "@/lib/client";

async function getProductDetails(slug) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]`;
  const details = await client.fetch(query);
  return details;
}

async function getProducts() {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);
  return products;
}
const ProductDetails = async ({ params: { slug } }) => {
  const details = getProductDetails(slug);
  const products = getProducts(slug);

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <Image
              src={urlFor(details.image)}
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
