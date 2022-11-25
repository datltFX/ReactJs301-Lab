import classes from "./Checkout.module.css";
import React, { useRef } from "react";

const Checkout = ({ onCancel, onConfirm }) => {
  //   console.log(onCancel);
  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  //submit
  const submitHandler = (e) => {
    e.preventDefault();
    const nameOrder = nameRef.current.value;
    const streetOrder = streetRef.current.value;
    const postalOrder = postalRef.current.value;
    const cityOrder = cityRef.current.value;
    if (
      nameOrder !== "" &&
      streetOrder !== "" &&
      postalOrder !== "" &&
      cityOrder !== "" &&
      postalOrder.length === 5
    ) {
      const inforOrder = {
        name: nameOrder,
        street: streetOrder,
        postalCode: postalOrder,
        city: cityOrder,
      };
      //   console.log(inforOrder);
      //tra data ham cha
      onConfirm(inforOrder);
    }
  };
  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label>Your Name</label>
          <input type="text" required ref={nameRef} />
        </div>
        <div className={classes.control}>
          <label>Street</label>
          <input type="text" required ref={streetRef} />
        </div>
        <div className={classes.control}>
          <label>Postal Code</label>
          <input
            type="text"
            required
            minLength={5}
            maxLength={5}
            ref={postalRef}
            placeholder="(5 characters long)"
          />
        </div>
        <div className={classes.control}>
          <label>City</label>
          <input type="text" required ref={cityRef} />
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className={classes.submit}>
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
