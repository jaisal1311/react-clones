import React, { useEffect, useState } from "react";
import "./Notification.css";
import CloseIcon from "@material-ui/icons/Close";

const Notification = ({ id, title, image, price, rating }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    setTimeout(() => setIsOpen(false), 10000);
  }, []);
  return (
    <div className={!isOpen ? "notification-hide" : "notification "}>
      <img src={image} alt={title} className="notification__image" />
      <div className="notification__info">
        <h5>{title}</h5>
        <p>${price}</p>
      </div>
      <CloseIcon
        fontSize="small"
        onClick={handleClose}
        className="notification__close"
      />
    </div>
  );
};

export default Notification;
