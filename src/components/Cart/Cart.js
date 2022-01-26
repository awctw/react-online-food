import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }];

  return (
    <Modal>
      <ul className={classes["cart-items"]}>
        {cartItems.map((data) => {
          return <li key={data.id}>{data.name}</li>;
        })}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>12.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
