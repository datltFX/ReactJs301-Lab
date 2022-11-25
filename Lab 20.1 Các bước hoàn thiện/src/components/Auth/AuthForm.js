//do
import { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  //lay du lieu
  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  //submit
  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //them xac nhan
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD6K8EFV4pXax_sBFMh47sdS95HU5E5IAw";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD6K8EFV4pXax_sBFMh47sdS95HU5E5IAw";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          //in ra loi
          return res.json().then((data) => {
            console.log(data);
            let errorMessage = "Authentication failed!";
            throw new Error(
              `${errorMessage}-----loi ${res.status}: ${data.error.message}`
            );
          });
        } else {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        alert("dang nhap thanh cong");
        history.replace("/");
        //luu token cap nhap state trong contex
        authCtx.login(data.idToken);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  //render
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
