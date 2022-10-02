import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (prop) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "sushi", amount: 20 }].map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal onCloseBackdrop={prop.onClose} >
      <div>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>35</span>
        </div>
        <div className={classes.actions}>
          <button onClick={prop.onClose} className={classes["button--alt"]}>Close</button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
