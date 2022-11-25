import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";

const MealItemForm = ({ onAddCart }) => {
  // console.log(onAddCart);
  const [amount, setAmount] = useState(true);
  const amountInputRef = useRef();
  //submit
  const submitHandler = (e) => {
    e.preventDefault();
    const amountAdd = Number(amountInputRef.current.value);
    setAmount(true);
    console.log(amountAdd);
    if (amountAdd === "" || amountAdd < 1 || amountAdd > 5) {
      setAmount(false);
      return;
    } else {
      onAddCart(amountAdd);
    }
  };
  //render
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.input}>
        <label>Amount</label>
        <input
          ref={amountInputRef}
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
      </div>
      <button>+ Add</button>
      {!amount && <p>Nhap so luong!</p>}
    </form>
  );
};

export default MealItemForm;
