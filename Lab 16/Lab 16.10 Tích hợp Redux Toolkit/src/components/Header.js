//do
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../redux/auth";
import classes from "./Header.module.css";
const Header = () => {
  const dispatch = useDispatch();
  //lay state tu store
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuth);
  const logoutHandler = (e) => {
    e.preventDefault();
    //truyen action
    dispatch(authAction.logout());
  };
  return (
    <div className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <ul>
          <li>My Product</li>
          <li>My Sales</li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
