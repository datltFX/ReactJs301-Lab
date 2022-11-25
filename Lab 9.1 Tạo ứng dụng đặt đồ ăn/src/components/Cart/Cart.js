import React, { useContext } from "react";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = ({ onClose }) => {
  //lay data tu context
  const cartCtx = useContext(CartContext);
  const total = cartCtx.totalAmount.toFixed(2);

  //render
  return (
    <div>
      <div className={classes.backdrop} onClick={onClose} />
      <div className={classes.modal}>
        {/* ------------------------------------cart-------------------------------------- */}
        <div>
          <ul className={classes["cart-items"]}>
            {cartCtx.items.map((item) => (
              <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                id={item.id}
              />
            ))}
          </ul>
        </div>
        {/* -----------------------------------total------------------------------------- */}
        <div>
          <div className={classes.total}>
            <span>ToTal Amount</span>
            <span>${total}</span>
          </div>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={onClose}>
              Close
            </button>
            {cartCtx.items.length > 0 && (
              <button className={classes.button}>Order</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
