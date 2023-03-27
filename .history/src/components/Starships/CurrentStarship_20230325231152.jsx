import React from 'react';

function CurrentStarship({ starships }) {
  return (
    <div className='selected-item'>
      <h3>{starships.name}</h3>
          <p>Manufacturer: {starships.manufacturer}</p>
          <p>Starship class: {starships.starship_class}</p>
          <p>Consumables: {starships.consumables}</p>
    </div>
  );
}

export default CurrentStarship;