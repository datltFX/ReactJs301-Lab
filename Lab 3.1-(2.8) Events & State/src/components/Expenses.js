import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesItem from "./ExpensesItem";

const Expenses = ({ items }) => {
  // console.log(items);
  return (
    <div className="expenses">
      <ExpensesFilter />
      {items.map((exp) => (
        <ExpensesItem
          key={exp.id}
          title={exp.title}
          amount={exp.amount}
          date={exp.date}
        />
      ))}
    </div>
  );
};

export default Expenses;
