import React from "react";
import range from "lodash/range";

import "./Product.css";

const Product = ({ title, image, price, rating }) => {
  const star_rating = range(rating);
  console.log(star_rating);
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {star_rating.map((s) => (
            <p>⭐</p>
          ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
