import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./CartItem.module.css";

const CartItem = ({ name, price, amount, id }) => {
  // console.log(name, price, amount, id);
  //lay data tu context
  const cartCtx = useContext(CartContext);
  const removeCartHandler = () => {
    cartCtx.removeItem(id);
  };
  const addCartHandler = () => {
    const [itemCart] = cartCtx.items.filter((item) => item.id === id);
    // console.log(itemCart);
    const oneCart = { ...itemCart, amount: 1 };
    // console.log(oneCart);
    cartCtx.addItem(oneCart);
  };
  //render
  return (
    <div>
      <li className={classes["cart-item"]}>
        <div>
          <h2>{name}</h2>
          <div className={classes.summary}>
            <span className={classes.price}>${price}</span>
            <span className={classes.amount}>x {amount}</span>
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={removeCartHandler}>-</button>
          <button onClick={addCartHandler}>+</button>
        </div>
      </li>
    </div>
  );
};

export default CartItem;
