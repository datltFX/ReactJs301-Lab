import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = ({ id, name, description, price }) => {
  // console.log(id, name, description, price);
  //lay du lieu tu context
  const cartCtx = useContext(CartContext);
  const addhandler = (amount) => {
    //lay ham addItem trong context truyen data vao reducer
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };
  //render
  return (
    <div className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>${price}</div>
      </div>
      <MealItemForm onAddCart={addhandler} />
    </div>
  );
};

export default MealItem;
