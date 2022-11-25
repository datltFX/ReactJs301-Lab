import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ onShow }) => {
  //lay du lieu tu context
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberCart = items.reduce((curNum, item) => (curNum += item.amount), 0);
  //render
  return (
    <div>
      <button className={classes.button} onClick={onShow}>
        <span className={classes.icon}>🛒</span>
        <span>Your Cart </span>
        <span className={classes.badge}>{numberCart}</span>
      </button>
    </div>
  );
};

export default HeaderCartButton;
