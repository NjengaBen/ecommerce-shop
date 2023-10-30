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
