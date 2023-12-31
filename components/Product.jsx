import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/client";

const Product = ({ product: { image, slug, name, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <Image
            src={urlFor(image && image[0])}
            alt="product"
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
