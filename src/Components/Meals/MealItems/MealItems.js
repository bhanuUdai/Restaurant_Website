import React from "react";
import classes from "./MealItems.module.css";
import MealItemForm from "./MealItemForm";
const MealItems = (prop) => {
  const price = `$${prop.meal.price}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{prop.meal.name}</h3>
        <div className={classes.description}>{prop.meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItems;
