import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Image from "../../assets/meals.jpg";

const Header = ({ onShow }) => {
  return (
    <div>
      <div className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShow={onShow} />
      </div>
      <div className={classes["main-image"]}>
        <img src={Image} alt="food" />
      </div>
    </div>
  );
};

export default Header;
