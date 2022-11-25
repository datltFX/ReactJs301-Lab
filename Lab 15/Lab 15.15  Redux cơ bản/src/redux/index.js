//do
import { createStore } from "redux";

//1.tao initialState
const initalState = { counter: 0 };
//2.tao reducer
const reducer = (state = initalState, action) => {
  console.log(action);
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};
//3.tao store
const store = createStore(reducer);
export default store;
