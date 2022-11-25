import ExpensesDate from "./ExpensesDate";
import "./ExpensesItem.css";

const ExpensesItem = ({ title, amount, date }) => {
  // console.log(title, amount, date);
  return (
    <div className="expense-item">
      <ExpensesDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};

export default ExpensesItem;
