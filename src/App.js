import classes from "./App.css";
import Persons from "./components/Persons/Persons";
import Cockpit from "./components/Cockpit/Cockpit";
import React, { Component } from "react";

// import styled from "styled-components";

// const Button = styled.button`
//   border: 1px solid ${(props) => (props.primary ? "green" : "red")};
//   background: ${(props) => (props.primary ? "green" : "red")};
//   color: white;
//   padding: 10px;
//   font-size: 1rem;
//   font-weight: bold;
//   cursor: pointer;
//   border-radius: 5px;
// `;

class App extends Component {
  state = {
    persons: [
      { name: "Gunaalan", age: 21 },
      { name: "Dhayaalan", age: 30 },
      { name: "Chitra", age: 10 },
    ],
    showPersons: false,
  };

  showPersonHandler = () => {
    const showPersons = this.state.showPersons ? false : true;
    this.setState({ showPersons: showPersons });
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  changeNameHandler = (event, index) => {
    const persons = [...this.state.persons];
    const person = persons[index];
    person.name = event.target.value;
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          changed={this.changeNameHandler}
          click={this.deletePersonHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          click={this.showPersonHandler}
          showPersons={this.state.showPersons}
        />
        {persons}
      </div>
    );
  }
}

// const App = (props) => {
//   const [personState, setPersonState] = useState({
//     persons: [
//       { paraText: "This is Paragraph" },
//       { paraText: "This is second Paragraph" },
//     ],
//   });

//   const switchNameHandler = () => {
//     setPersonState({
//       persons: [{ paraText: "This is Paragraph" }, { paraText: "This is 2nd Paragraph" }],
//     });
//   };

//   return (
//     <div className="App">
//       <h1>This is my first React App</h1>
//       <button onClick={switchNameHandler}>Switch</button>
//       <Person paraText={personState.persons[0].paraText} />
//       <Person paraText={personState.persons[1].paraText} />
//     </div>
//   );
// };

export default App;
