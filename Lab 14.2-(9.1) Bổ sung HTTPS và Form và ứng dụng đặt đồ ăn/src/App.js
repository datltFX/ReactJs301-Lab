//do
import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  //hien thi cart
  const [showCart, setShowCart] = useState(false);
  const showHandler = () => {
    setShowCart(true);
  };
  const hideHandler = () => {
    setShowCart(false);
  };
  //render
  return (
    <div>
      {showCart && <Cart onClose={hideHandler} />}
      <Header onShow={showHandler} />
      <Meals />
    </div>
  );
}

export default App;
