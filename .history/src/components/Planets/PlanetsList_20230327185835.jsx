import React, { useState } from 'react';

function PlanetsList({ planets, onItemClick }) {

  const [showComponent, setShowComponent] = useState(false);

  const toggleShowComponent = () => {
      setShowComponent(!showComponent);
    };

  
  return (
    <div className='item-list'>
      <h2 onClick={toggleShowComponent}>Planets</h2>
      {showComponent && (
        <ul>
          {planets.map(planets => (
            <li key={planets.url} onClick={() => onItemClick(planets)}>
              {planets.name}
            </li>
          ))}
        </ul>)
      }
    </div>
  );
}

export default PlanetsList;