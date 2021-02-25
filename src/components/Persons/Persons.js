import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {};
    console.log("[Persons.js] Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[Persons.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[Persons.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    return true;
  }

  render() {
    console.log("[Persons.js] Rendering...");
    return this.props.persons.map((person, index) => (
      <Person
        key={index}
        name={person.name}
        age={person.age}
        click={() => this.props.click(index)}
        changed={(event) => this.props.changed(event, index)}
      />
    ));
  }
}

export default Persons;
