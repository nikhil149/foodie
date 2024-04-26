import MealItem from "./meal-items";
import classes from "./meals-grid.module.css";
const MealsGrid = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem
            creator={meal.creator}
            image={meal.image}
            slug={meal.slug}
            summary={meal.summary}
            title={meal.title}
          />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
