import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorName, setErrorName] = useState(0);
  const [errorEmail, setErrorEmail] = useState(0);

  //cap nhap value input vao state
  const nameOnChageHandler = (e) => {
    // console.log(e);
    setName(e.target.value);
    setErrorName(0);
  };
  const emailOnChageHandler = (e) => {
    // console.log(e);
    setEmail(e.target.value);
    setErrorEmail(0);
  };
  //xac nhan thong tin nhap
  const validate = () => {
    if (name === "" || email === "" || !email.includes("@")) {
      return false;
    } else {
      return true;
    }
  };

  //su kien submit
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(e);
    if (validate()) {
      console.log({ name: name, email: email });
      alert("dang nhap thanh cong");
      //reset form input
      setName("");
      setEmail("");
    } else {
      //cap nhap lai loi vao state
      if (name === "") {
        setErrorName("Name must not be empty!");
      }
      if (email === "" || !email.includes("@")) {
        setErrorEmail("Please enter a valid email!");
      }
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label>Your Name</label>
        <input
          type="text"
          value={name}
          onChange={nameOnChageHandler}
          placeholder="Enter Your Name Here!"
        />

        {errorName !== 0 ? <p className="error-text">{errorName}</p> : <></>}
      </div>
      <div className="form-control">
        <label>Your E-mail</label>
        <input
          value={email}
          onChange={emailOnChageHandler}
          placeholder="Enter Your Email Here!"
        />
        {errorEmail !== 0 ? <p className="error-text">{errorEmail}</p> : <></>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Form;
