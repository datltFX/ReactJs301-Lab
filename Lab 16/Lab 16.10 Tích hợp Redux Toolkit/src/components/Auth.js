//do
import { useDispatch } from "react-redux";
import { authAction } from "../redux/auth";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authAction.login());
  };
  return (
    <div className={classes.auth}>
      <form onSubmit={loginHandler}>
        <div className={classes.control}>
          <label>Email</label>
          <input type="email" required />
        </div>

        <div className={classes.control}>
          <label>Password</label>
          <input type="password" required />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
