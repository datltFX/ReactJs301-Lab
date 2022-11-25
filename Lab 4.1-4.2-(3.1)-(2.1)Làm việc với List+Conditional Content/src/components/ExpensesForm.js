import { useState } from "react";
import "./ExpensesForm.css";

const ExpensesForm = ({ onCancel, onSaveData }) => {
  // console.log(onCancel, onSaveData);
  //state luu gia tri
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  //cap nhap gai tri tu input
  const titleOnChangeHandler = (e) => {
    e.preventDefault();
    // console.log(e);
    setTitle(e.target.value);
  };
  const amountOnChangeHandler = (e) => {
    e.preventDefault();
    // console.log(e);
    setAmount(e.target.value);
  };
  const dateOnChangeHandler = (e) => {
    e.preventDefault();
    // console.log(e);
    setDate(e.target.value);
  };
  //submit
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      id: Math.random().toString(),
      title: title,
      amount: amount,
      date: new Date(date),
    };
    //truyen data ham cha
    onSaveData(expenseData);
    console.log(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Tilte</label>
            <input type="text" value={title} onChange={titleOnChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={amount}
              onChange={amountOnChangeHandler}
            />
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={date}
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateOnChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpensesForm;
