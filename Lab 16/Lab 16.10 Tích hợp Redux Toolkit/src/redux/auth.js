//do
const { createSlice } = require("@reduxjs/toolkit");
//1.initialState
const initialStateAuth = { isAuthenticated: false };
//2. tao reducer slice
const authSlice = createSlice({
  name: "authencation",
  initialState: initialStateAuth,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },

    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
//xuat action
export const authAction = authSlice.actions;
console.log(authAction);
export default authSlice.reducer;
