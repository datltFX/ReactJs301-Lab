import { useState } from "react";
import "./App.css";
import AddUser from "./Component/AddUser/AddUser";
import UsersList from "./Component/UserList/UsersList";

function App() {
  const [data, setData] = useState([]);
  const addUserHandler = (dataUser) => {
    setData((prevData) => [dataUser, ...prevData]);
  };
  console.log(data);
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />

      {data.length !== 0 ? <UsersList list={data} /> : <></>}
    </div>
  );
}

export default App;
