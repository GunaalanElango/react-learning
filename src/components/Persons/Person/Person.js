import React from "react";
import classes from "./Person.css";
// import styled from "styled-components";

// const Wrapper = styled.div`
//   width: 60%;
//   margin: 20px auto;
//   background: #eee;
//   padding: 20px 10px;
// `;

const Person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I am {props.name} and I am {props.age} years old.
      </p>
      <input type="text" value={props.name} onChange={props.changed} />
    </div>
  );
};

export default Person;

