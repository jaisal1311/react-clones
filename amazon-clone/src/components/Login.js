import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    console.log(password, email);
  };

  const register = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <Link to="/">
        <div className="logo__container">
          <img
            className="login__logo"
            src="http://pngimg.com/uploads/amazon/small/amazon_PNG21.png"
            alt="Amazon"
          />
        </div>
      </Link>
      <div className="login__form">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signinButton"
            type="submit"
            onClick={(e) => signIn(e)}
          >
            Sign In
          </button>
        </form>
        <p>
          By Signing in you agree to the AMAZON FAKE CLONE Condition of use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-based Ads Notice.
        </p>
        <button
          className="login__registerButton"
          onClick={(e) => {
            register(e);
          }}
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
