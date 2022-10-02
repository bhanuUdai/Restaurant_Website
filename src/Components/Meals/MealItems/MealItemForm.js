import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (prop) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount"+prop.id,
          type: "number",
          min: 1,
          max: 5,
          defaultValue: 1,
          step: 1,
        }}
      />
      <button>+ADD</button>
    </form>
  );
};

export default MealItemForm;


//here in <Input>, in input={{}}, we are passing object i.e {{key:value}}}