import React from 'react';

function CurrentPlanet({ planets }) {
  return (
      <div className='selected-item'>
        <h3>{planets.name}</h3>
        <p>Population: {planets.population}</p>
        <p>Rotation period: {planets.rotation_period}</p>
        <p>Hdiameter: {planets.diameter}</p>
      </div>
  );
}

export default CurrentPlanet;