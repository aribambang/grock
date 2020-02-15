import React, { useState } from 'react';
// import styled from 'styled-components';
import './App.css';
import Person from './person/Person';

// const StyledButton = styled.button`
//   background-color: ${props => (props.alt ? 'red' : 'green')};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
//   &:hover {
//     background-color: ${props => (props.alt ? 'salmon' : 'lightgreen')};
//     color: black;
//   }
// `;
const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 'o1', name: 'Bambang', age: 23 },
      { id: 'o2', name: 'Uye', age: 20 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  const [showPersonState, setShowPersonState] = useState(false);

  console.log(personsState, otherState);

  // const swithNameHandler = newName => {
  //   //console.log('clicked');
  //   setPersonsState({
  //     persons: [
  //       { name: newName, age: 23 },
  //       { name: 'Iye', age: 20 }
  //     ]
  //   });
  // };

  const nameChangedHandler = (event, id) => {
    //console.log('clicked');

    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...personsState[personIndex]
    };

    person.name = event.target.value;

    const persons = [...personsState.persons];
    persons[personIndex] = person;
    setPersonsState({ persons });
  };

  const deletePersonHandler = personIndex => {
    //const persons = personsState.persons;
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({ persons: persons });
  };

  const togglePersonsHandler = () => {
    setShowPersonState(!showPersonState);
  };

  // const style = {
  //   backgroundColor: 'green',
  //   color: 'white',
  //   font: 'inherit',
  //   border: '1px solid blue',
  //   padding: '8px',
  //   cursor: 'pointer',
  //   ':hover': {
  //     backgroundColor: 'lightgreen',
  //     color: 'black'
  //   }
  // };

  let persons = null;

  if (showPersonState) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return (
            <Person
              click={() => deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={event => nameChangedHandler(event, person.id)}
            />
          );
        })}
      </div>
    );
    // style.backgroundColor = 'red';
    // style[':hover'] = {
    //   backgroundColor: 'salmon',
    //   color: 'black'
    // };
  }

  const classes = [];

  if (personsState.persons.length <= 2) {
    classes.push('red');
  }
  if (personsState.persons.length <= 1) {
    classes.push('bold');
  }
  return (
    <div className='App'>
      <h1>Snapgram rasa tiktok</h1>
      {/* <p class='tiktok'>TIKTOK</p> */}
      <p className={classes.join(' ')}>Adaw</p>
      <button className='button' onClick={togglePersonsHandler}>
        Toggle person
      </button>
      {persons}
    </div>
  );
};

export default App;
