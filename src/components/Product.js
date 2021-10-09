import React from "react";
import "./Product.css";

const Product = ({ image, description, title, price, rate = 0, count = 0 }) => {
  return (
    <div className="rounded mx-2 my-2 px-2 py-2 d-flex flex-column justify-content-center product-container">
      <div className="img-container">
        <img className="product-img" src={image} alt="product" />
      </div>
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <div className="d-flex">
        <div className="px-2 py-2 product-price ">Buy @ {price}</div>
        <div className="px-2 py-2 product-rate">
          Rate {rate}/{count}
        </div>
      </div>
    </div>
  );
};

export default Product;
