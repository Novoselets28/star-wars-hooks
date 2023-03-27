import React, { useState } from 'react';

function StarshipsList({ starships, onItemClick }) {

  const [showComponent, setShowComponent] = useState(false);

  const toggleShowComponent = () => {
      setShowComponent(!showComponent);
    };

  
  return (
    <div className='item-list'>
      <h2 onClick={toggleShowComponent}>Starships</h2>
      {showComponent && (
        <ul>
          {starships.map(starships => (
            <li key={starships.url} onClick={() => onItemClick(starships)}>
              {starships.name}
            </li>
          ))}
        </ul>)
      }
    </div>
  );
}

export default StarshipsList;