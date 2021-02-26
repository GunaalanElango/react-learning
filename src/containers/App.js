import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import React, { Component } from "react";
import AuthContext from "../context/AuthContext";
// import Aux from '../hoc/Auxiliary';

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
  constructor(props) {
    super(props);
    console.log("[App.js] Constructor");
  }

  state = {
    persons: [
      { name: "Gunaalan", age: 21 },
      { name: "Dhayaalan", age: 30 },
      { name: "Chitra", age: 10 },
    ],
    showPersons: false,
    authenticated: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

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

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log("[App.js] Rendering...");
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
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}
        >
          <Cockpit
            click={this.showPersonHandler}
            showPersons={this.state.showPersons}
          />
          {persons}
        </AuthContext.Provider>
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
