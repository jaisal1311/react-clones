import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "../stateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";
import axios from "../axios";

const Payment = () => {
  const history = useHistory();

  const [state, dispatch] = useStateValue();
  const [total, setTotal] = useState(0);

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState();
  const [succeeded, setSucceeded] = useState();

  const [clientSecret, setClientSecret] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("Thanks for ordering!!!");
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  // useEffect(() => {
  //   const getClientSecret = async () => {
  //     const response = await axios({
  //       method: "post",
  //       url: `payments/create?total=${total}`,
  //     });
  //     setClientSecret(response.data.clientSecret);
  //   };

  //   getClientSecret();
  // }, [state.basket]);

  useEffect(() => {
    setTotal(0);
    state.basket.map(({ price }) => {
      setTotal((total) => total + price);
    });
  }, [state.basket]);

  return (
    <div className="payment">
      <h1>Checkout({state.basket.length} item)</h1>
      <div className="payment__container">
        <div className="payment__containerAddress">
          <h3 className="payment__containerTitles">Your Address</h3>
          <h3 className="payment__containerValues">
            Your Address difk gzsieleil.
          </h3>
        </div>
        <div className="payment__containerAddress">
          <h3 className="payment__containerTitles">
            Review Items and delivery
          </h3>
          <div className="payment__containerProducts">
            {state.basket.map(({ id, title, image, price, rating }) => {
              return (
                <CheckoutProduct
                  key={id}
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
        <div className="payment__containerAddress">
          <h3 className="payment__containerTitles">Payment Method</h3>
          <div className="payment__containerCardDetails">
            <h4>Card Details</h4>
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <CardElement
                className="payment__containerCard"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <div className="container__containerTotal">
                <h4>Order Total: ${total}</h4>
                <button
                  type="submit"
                  disabled={processing || disabled || succeeded}
                >
                  Buy Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
