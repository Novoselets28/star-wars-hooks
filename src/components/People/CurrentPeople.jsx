import React from 'react';

function CurrentPeople({ person }) {
  return (
    <div className='selected-item'>
      <h3>{person.name}</h3>
      <p>Gender: {person.gender}</p>
      <p>Birth year: {person.birth_year}</p>
      <p>Eye color {person.eye_color}</p>
    </div>
  );
}

export default CurrentPeople;

