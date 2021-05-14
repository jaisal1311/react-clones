import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../stateProvider";
import range from "lodash/range";
const CheckoutcheckoutProduct = ({ id, title, image, price, rating }) => {
  const [state, dispatch] = useStateValue();

  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: id,
    });
  };

  const star_rating = range(rating);

  return (
    <div className="checkoutProduct">
      <img src={image} alt={title} className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹ </small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {star_rating.map((s) => (
            <p>⭐</p>
          ))}
        </div>
        <button
          onClick={() => {
            removeItem();
          }}
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutcheckoutProduct;
