import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/AuthContext";

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    toggleBtnRef.current.click();
    return () => {
      console.log("[Cockpit.js] Cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] Cleanup work in 2nd useEffect");
    };
  });

  let buttonClass = "";
  if (props.showPersons) {
    buttonClass = classes.Red;
  }

  return (
    <div className={classes.Cockpit}>
      <h1>This is my first React App</h1>
      <button ref={toggleBtnRef} className={buttonClass} onClick={props.click}>
        Show Persons
      </button>
      <br />
      <br />
      <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Login In</button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(Cockpit);
