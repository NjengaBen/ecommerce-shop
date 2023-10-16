import { FooterBanner, HeroBanner } from "@/components";
import { client } from "@/lib/client";
import Image from "next/image";

const getProducts = async () => {
  const query = '*[_type == "product"]';
  const productData = await client.fetch(query);

  return productData;
};

const getBanner = async () => {
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return bannerData;
};
export default async function Home() {
  const products = await getProducts();
  const banner = await getBanner();
  return (
    <div>
      <HeroBanner heroBanner={banner.length && banner[0]} />
      {console.log(banner)}
      <div className="products-heading">
        <h2>Best selling products</h2>
        <p>Earphones of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => product.name)}
      </div>
      <FooterBanner />
    </div>
  );
}
