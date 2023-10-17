import Image from "next/image";
import { client, urlFor } from "@/lib/client";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

export const generateStaticParams = async () => {
  const query = `*[_type == "product"]{slug{current}}`;
  const products = await client.fetch(query);
  return products.map((product) => ({
    slug: product.slug.current,
  }));
};
async function getProductDetails(slug) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]`;
  const productDetails = await client.fetch(query);
  return productDetails;
}

async function getProducts(slug) {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);
  return products;
}
const ProductDetails = async ({ params }) => {
  const { slug } = params;
  const ProductDetails = await getProductDetails(slug);
  const { image, name, price, details } = ProductDetails;
  const products = await getProducts(slug);
  console.log(details);

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <Image
              src={urlFor(image && image[0])}
              alt="product"
              width={450}
              height={450}
            />
          </div>
          {/* <div className="small-images-container">
            {image?.map((item, i) => (
              <Image
                key={i}
                src={urlFor(item)}
                alt="product"
                width={70}
                height={70}
                className={i === 0 ? "selected-image" : "small-image"}
                onMouseEnter=""
              />
            ))}
          </div> */}
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details:</h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick="">
                <AiOutlineMinus />
              </span>
              <span className="num">0</span>
              <span className="plus" onClick="">
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart">
              Add to Cart
            </button>
            <button type="button" className="buy-now">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
