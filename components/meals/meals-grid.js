import MealItem from "./meal-items";
import classes from "./meals-grid.module.css";
const MealsGrid = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meals} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
