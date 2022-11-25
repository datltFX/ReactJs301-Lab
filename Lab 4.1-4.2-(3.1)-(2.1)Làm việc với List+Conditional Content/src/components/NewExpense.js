import { useState } from "react";
import ExpensesForm from "./ExpensesForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  //   console.log(onAddExpense);
  const [displayForm, setDisplayForm] = useState(false);

  const saveExpenseHandler = (expenseData) => {
    onAddExpense(expenseData);
    //save data an form
    setDisplayForm(false);
  };
  //ham hien thi form
  const displayFormHandler = () => {
    setDisplayForm(true);
  };
  //an form
  const hideFormHandler = () => {
    setDisplayForm(false);
  };
  return (
    <div className="new-expense">
      {displayForm && (
        <ExpensesForm
          onCancel={hideFormHandler}
          onSaveData={saveExpenseHandler}
        />
      )}
      {!displayForm && (
        <button onClick={displayFormHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
