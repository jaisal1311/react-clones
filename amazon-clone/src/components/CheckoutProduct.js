import React from "react";
import "./CheckoutProduct.css";
const CheckoutcheckoutProduct = () => {
  return (
    <div className="checkoutProduct">
      <img
        src="https://http2.mlstatic.com/D_NQ_NP_733189-MLA42623652264_072020-O.webp"
        alt=""
        className="checkoutProduct__image"
      />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">
          Código Limpio / Clean Code : Robert C. Martin
        </p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{5}</strong>
        </p>
        <div className="checkoutProduct__rating">
          <p>⭐</p>
        </div>
        <button>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutcheckoutProduct;
