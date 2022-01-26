import React, { Fragment } from "react";
import classes from "./Header.module.css";

import mealImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img alt="A table full of good food!" src={mealImage} />
      </div>
    </Fragment>
  );
};

export default Header;
