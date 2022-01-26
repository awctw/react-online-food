import React from "react";

import classes from "./AvailableMeals.module.css";
import { DUMMY_MEALS } from "./dummy-meals";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((data) => {
            return (
              <MealItem
                key={data.id}
                id={data.id}
                name={data.name}
                price={data.price}
                description={data.description}
              />
            );
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
