//do
import { createSlice } from "@reduxjs/toolkit";

//1.initialstateCounter
const initialStateCounter = { counter: 0 };
const counterSlice = createSlice({
  name: "counttt",
  initialState: initialStateCounter,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increment10(state, action) {
      state.counter = state.counter + action.payload;
    },
  },
});
export const counterAction = counterSlice.actions;
export default counterSlice.reducer;
