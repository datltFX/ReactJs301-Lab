import { useState } from "react";
import ExpensesDate from "./ExpensesDate";
import "./ExpensesItem.css";

const ExpensesItem = ({ title, amount, date }) => {
  // console.log(title, amount, date);
  const [title1, setTitle1] = useState(title);
  const changeTitleHandler = () => {
    setTitle1("Update");
    console.log(title1);
  };
  return (
    <div className="expense-item">
      <ExpensesDate date={date} />
      <div className="expense-item__description">
        <h2>{title1}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={changeTitleHandler}>changeTitle</button>
    </div>
  );
};

export default ExpensesItem;
