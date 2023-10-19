"use client";
import React, { useState } from "react";
import { urlFor } from "@/lib/client";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { Product } from "@/components";
import Image from "next/image";

const Data = ({
  products,
  productDetails: { image, name, price, details },
}) => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <Image
              src={urlFor(image && image[index])}
              alt="product"
              width={400}
              height={400}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <Image
                key={i}
                src={urlFor(item)}
                alt="product"
                width={70}
                height={70}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            {/* <div></div> */}
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
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products?.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
