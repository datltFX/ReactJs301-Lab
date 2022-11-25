//do
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <div className={classes.summary}>
      <h2>Delisous Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our board selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of coursr by experienced chefs!
      </p>
    </div>
  );
};

export default MealsSummary;
