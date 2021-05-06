import React, { useState, useEffect } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../stateProvider";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(0);
    basket.map(({ price }) => {
      setTotal((total) => total + price);
    });
  }, [basket]);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items): <strong>{total}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to payment</button>
    </div>
  );
};

export default Subtotal;
