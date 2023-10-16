import { FooterBanner, HeroBanner } from "@/components";
import { client } from "@/lib/client";
import Image from "next/image";

export default function Home({ products, bannerData }) {
  return (
    <div>
      <HeroBanner />
      {console.log(bannerData)}
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

export const getServerSidePropgs = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
