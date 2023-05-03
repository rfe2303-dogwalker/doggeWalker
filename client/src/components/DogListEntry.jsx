import React from 'react';

const DogListEntry = ({ dog }) => {
  return (
    <div>
      <h5>{dog.dogName}</h5>
    </div>
  );
};

export default DogListEntry;
