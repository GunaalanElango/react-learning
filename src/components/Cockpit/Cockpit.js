import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    setTimeout(() => alert("Cockpit alert"), 1000);
    return () => {
      console.log("[Cockpit.js] Cleanup work");
    };
  }, []);

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
