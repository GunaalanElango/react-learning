import React from "react";
import classes from "./Cockpit.css";

const Cockpit = (props) => {
  let buttonClass = "";
  if (props.showPersons) {
    buttonClass = classes.Red;
  }

  return (
    <div className={classes.Cockpit}>
      <h1>This is my first React App</h1>
      <button className={buttonClass} onClick={props.click}>
        Show Persons
      </button>
    </div>
  );
};

export default Cockpit;
