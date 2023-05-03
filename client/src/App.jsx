import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DogList from './components/DogList.jsx';
import AddDog from './components/AddDog.jsx';

const dogArray = [
  { dogName: 'figo' },
  { dogName: 'pippa' },
  { dogName: 'henry' },
  { dogName: 'lotti' }
];
const App = () => {
  // add component for adding a dog to the list
  // list of dog components
  // individual dog component
  const [dogs, setDogs] = useState(dogArray);

  // useEffect(() => {
  //   axios
  //     .get('/getDogs')
  //     .then((dogData) => {
  //       console.log('this is dogData.data in App: ', dogData.data);
  //       setDogs(dogData.data);
  //     })
  //     .catch((err) => {
  //       console.log('this is error getting dogs: ', err);
  //     });
  // }, []);

  return (
    <div>
      <h1>Dog Walker</h1>
      <AddDog />
      <DogList dogs={dogs} />
    </div>
  );
};

export default App;
