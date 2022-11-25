import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesItem from "./ExpensesItem";

const Expenses = ({ items }) => {
  console.log(items);
  const [year, setYear] = useState("2020");
  const yearhandler = (selectedyear) => {
    setYear(selectedyear);
  };
  //loc mang thoa man dieu kien nam
  const dataYear = items.filter(
    (exp) => exp.date.getFullYear().toString() === year
  );
  console.log(dataYear);
  //render
  return (
    <div className="expenses">
      <ExpensesFilter selected={year} onChangeYear={yearhandler} />
      {dataYear.length !== 0 ? (
        dataYear.map((exp) => (
          <ExpensesItem
            key={exp.id}
            title={exp.title}
            amount={exp.amount}
            date={exp.date}
          />
        ))
      ) : (
        <h2 className="expenses__fallback">Found no expense</h2>
      )}
    </div>
  );
};

export default Expenses;
