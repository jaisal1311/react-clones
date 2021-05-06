import React from "react";
import { useStateValue } from "../stateProvider";
import range from "lodash/range";

import "./Product.css";

const Product = ({ id, title, image, price, rating }) => {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  const star_rating = range(rating);
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
      <button
        onClick={() => {
          addToBasket();
        }}
      >
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
