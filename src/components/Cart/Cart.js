import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const context = useContext(CartContext);
  const totalAmount = `$${Math.abs(context.totalAmount).toFixed(2)}`;
  const hasItems = context.items.length > 0;

  const cartItemRemoveHandler = (item) => {
    context.removeItem(item);
  };

  const cartItemAddHandler = (item) => {
    context.addItem(item);
  };

  return (
    <Modal onHideCart={props.onHideCart}>
      <ul className={classes["cart-items"]}>
        {context.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              onRemove={cartItemRemoveHandler.bind(null, item)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          );
        })}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
