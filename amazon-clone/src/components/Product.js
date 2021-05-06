import React from "react";
import { useStateValue } from "../stateProvider";
import range from "lodash/range";
import { useHistory } from "react-router-dom";

import "./Product.css";
import { Link } from "@material-ui/icons";

const Product = ({ id, title, image, price, rating }) => {
  const history = useHistory();
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
      <div className="product__buttonBar">
        <button
          onClick={() => {
            addToBasket();
          }}
        >
          Add to Basket
        </button>
        <button
          onClick={() => {
            history.push("/checkout");
          }}
        >
          View in Basket
        </button>
      </div>
    </div>
  );
};

export default Product;
