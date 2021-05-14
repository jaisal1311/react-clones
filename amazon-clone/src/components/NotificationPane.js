import React, { useEffect, useState } from "react";
import "./NotificationPane.css";
import Notification from "./Notification";
import { useStateValue } from "../stateProvider";
import TrendingFlatSharpIcon from "@material-ui/icons/TrendingFlatSharp";

const NotificationPane = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="notificationPane ">
      {basket.map(({ id, title, image, price, rating }) => {
        return (
          <Notification
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
  );
};

export default NotificationPane;
