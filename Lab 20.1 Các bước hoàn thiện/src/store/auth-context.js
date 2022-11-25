//do
import React, { useState } from "react";

//tao context
const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  //lay du lieu tu local
  const tokenData = localStorage.getItem("token");
  const [token, setToken] = useState(tokenData);
  //chuyen doi boolean
  const userIsLoggedIn = !!token;
  //logout
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    // console.log(token);
  };
  //login
  const loginHandler = (token) => {
    setToken(token);
    // console.log(token);
    localStorage.setItem("token", token);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
