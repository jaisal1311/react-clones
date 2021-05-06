import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "../stateProvider";

const Checkout = () => {
  const [state, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div className="checkout__leftTitle">
          <h2>Your Shopping Basket</h2>
        </div>
        <div className="checkout__leftProducts">
          {state.basket.map(({ id, title, image, price, rating }) => {
            return (
              <CheckoutProduct
                id={id}
                title={title}
                rating={rating}
                image={image}
                price={price}
              />
            );
          })}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
