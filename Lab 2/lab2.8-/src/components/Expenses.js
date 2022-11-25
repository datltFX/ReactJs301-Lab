import "./Expenses.css";
import ExpensesItem from "./ExpensesItem";

const Expenses = ({ items }) => {
  console.log(items);
  return (
    <div className="expenses">
      {items.map((exp) => (
        <ExpensesItem title={exp.title} amount={exp.amount} date={exp.date} />
      ))}
    </div>
  );
};

export default Expenses;
