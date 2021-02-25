import "./App.css";
import Person from "./Person/Person";
import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  border: 1px solid ${(props) => (props.primary ? "green" : "red")};
  background: ${(props) => (props.primary ? "green" : "red")};
  color: white;
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
`;

class App extends Component {
  state = {
    persons: [
      { name: "Gunaalan", age: 21 },
      { name: "Dhayaalan", age: 30 },
      { name: "Chitra", age: 10 },
    ],
    showPersons: false,
    primary: true,
  };

  showPersonHandler = () => {
    const showPersons = this.state.showPersons ? false : true;
    const primary = this.state.primary ? false : true;
    this.setState({ showPersons: showPersons, primary: primary });
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
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={index}
                changed={(event) => this.changeNameHandler(event, index)}
                click={() => this.deletePersonHandler(index)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>This is my first React App</h1>
        <Button primary={this.state.primary} onClick={this.showPersonHandler}>
          Show Persons
        </Button>
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
