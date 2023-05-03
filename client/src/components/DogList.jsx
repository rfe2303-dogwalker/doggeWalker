import React from 'react';
import DogListEntry from './DogListEntry.jsx';

const DogList = ({ dogs }) => {
  return (
    <div>
      <h2>List of Dogs</h2>
      {dogs.map((dog, index) => (
        <DogListEntry key={index} dog={dog} />
      ))}
    </div>
  );
};

export default DogList;
