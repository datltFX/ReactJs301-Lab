//do
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../redux/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  // const counter = 0;
  //lay state tu store
  const counter = useSelector((state) => state.count.counter);
  const dispatch = useDispatch();

  //4.truyen action
  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };
  const increment10Handler = () => {
    dispatch(counterAction.increment10(10));
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increment10Handler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
