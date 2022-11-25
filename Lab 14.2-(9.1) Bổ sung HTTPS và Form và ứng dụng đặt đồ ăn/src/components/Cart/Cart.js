import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = ({ onClose }) => {
  const [displayCheckout, setDisPlayCheckout] = useState(false);
  //lay data tu context
  const cartCtx = useContext(CartContext);
  const total = cartCtx.totalAmount.toFixed(2);

  //submit upload
  const submitOrderHandler = async (userOrder) => {
    //obj chua data upload
    const uploadData = { user: userOrder, orderItems: cartCtx.items };
    const res = await fetch(
      "https://react-http-a1e7c-default-rtdb.firebaseio.com/orders.json",
      { method: "POST", body: JSON.stringify(uploadData) }
    );
    const feedback = await res.json();
    console.log(feedback);
    //clean
    alert("Order success!");
    cartCtx.clearCart();
    onClose();
  };
  //hien checkout
  const displayCheckoutHanler = () => {
    setDisPlayCheckout(true);
  };

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
            <span>Total Amount</span>
            <span>${total}</span>
          </div>
          {!displayCheckout && (
            <div className={classes.actions}>
              <button className={classes["button--alt"]} onClick={onClose}>
                Close
              </button>
              {cartCtx.items.length > 0 && (
                <button
                  className={classes.button}
                  onClick={displayCheckoutHanler}
                >
                  Order
                </button>
              )}
            </div>
          )}
          {/* ---------------------------------checkout------------------------------------- */}
          <div>
            {displayCheckout && (
              <Checkout onCancel={onClose} onConfirm={submitOrderHandler} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
