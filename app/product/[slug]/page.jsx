import { client, urlFor } from "@/lib/client";
import { getProductDetails, getProducts } from "@/utils/getData";
import { Data } from "@/components";

export const generateStaticParams = async () => {
  const query = `*[_type == "product"]{slug{current}}`;
  const products = await client.fetch(query);
  return products.map((product) => ({
    slug: product.slug.current,
  }));
};

const ProductDetails = async ({ params }) => {
  const { slug } = params;
  const productDetails = await getProductDetails(slug);
  const products = await getProducts(slug);
  console.log(productDetails.image[0]);

  return <Data productDetails={productDetails} products={products} />;
};

export default ProductDetails;
