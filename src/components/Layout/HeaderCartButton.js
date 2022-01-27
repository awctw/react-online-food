import React, { useContext, useEffect, useState } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const context = useContext(CartContext);
  const cartItems = context.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  const [buttonState, setButton] = useState(false);

  const btnClasses = `${classes.button} ${buttonState ? classes.bump : ""}`;
  const { items } = context;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButton(true);

    const timer = setTimeout(() => {
      setButton(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
