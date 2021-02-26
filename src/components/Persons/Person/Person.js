import React, { useRef, useEffect } from "react";
import classes from "./Person.css";
import AuthContext from "../../../context/AuthContext";
// import Aux from "../../../hoc/Auxiliary";
// import styled from "styled-components";

// const Wrapper = styled.div`
//   width: 60%;
//   margin: 20px auto;
//   background: #eee;
//   padding: 20px 10px;
// `;

const Person = (props) => {
  const inputElementRef = useRef(null);

  useEffect(() => {
    inputElementRef.current.focus();
  }, []);

  console.log("[Person.js] Rendering...");

  return (
    <div className={classes.Person}>
      <AuthContext.Consumer>
        {(context) =>
          context.authenticated ? <p>Authenticated</p> : <p>Login in</p>
        }
      </AuthContext.Consumer>
      <p onClick={props.click}>
        I am {props.name} and I am {props.age} years old.
      </p>
      <input
        ref={inputElementRef}
        type="text"
        value={props.name}
        onChange={props.changed}
      />
    </div>
  );
};

export default Person;
