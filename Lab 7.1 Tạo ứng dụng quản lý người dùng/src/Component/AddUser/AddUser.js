import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../ErrorModal/ErrorModal";

const AddUser = ({ onAddUser }) => {
  // console.log(onAddUser);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);
  // console.log(error);

  //lay gia tri input
  const nameHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setName(e.target.value);
  };
  const ageHandler = (e) => {
    e.preventDefault();
    setAge(e.target.value);
  };

  //xac thuc thong tin nhap
  const validate = () => {
    if (name === "" || age === "") {
      setError({
        nameError: "Invalid input",
        contentError: "Xin Nhap day du thong tin",
      });
      return false;
    } else if (age < 1) {
      setError({
        nameError: "Invalid age",
        contentError: "Nhap dung tuoi (>0)",
      });
      return false;
    } else {
      return true;
    }
  };

  //su kien submit
  const submitHandler = (e) => {
    e.preventDefault();
    if (validate()) {
      const dataUser = {
        id: Math.random().toString(),
        username: name,
        ageUser: age,
      };
      // console.log(dataUser);
      onAddUser(dataUser);
      setName("");
      setAge("");
    }
  };
  //an modal
  const hideModalHandler = () => {
    setError(null);
  };
  //render
  return (
    <div>
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter username"
              onChange={nameHandler}
              value={name}
            />
          </div>
          <div>
            <label htmlFor="username">Age (Years)</label>
            <input
              id="age"
              type="number"
              placeholder="Enter age"
              onChange={ageHandler}
              value={age}
            />
          </div>
          <div>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
      {error && (
        <ErrorModal
          title={error.nameError}
          content={error.contentError}
          hide={hideModalHandler}
        />
      )}
    </div>
  );
};

export default AddUser;
