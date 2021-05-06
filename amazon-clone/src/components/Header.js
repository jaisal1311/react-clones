import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { useStateValue } from "../stateProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const [state, dispatch] = useStateValue();
  console.log(state.basket.length);
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="Amazon"
          className="header__logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
      <Link to="/checkout" style={{ textDecoration: "none" }}>
        <div className="header__basket">
          <ShoppingBasketIcon />
          <span className="header__basketCOunt header__optionLineTwo">
            {state.basket.length}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
