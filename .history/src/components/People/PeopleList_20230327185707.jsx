import React, { useState } from 'react';

function PeopleList({ people, onItemClick }) {

  const [showComponent, setShowComponent] = useState(false);

  const toggleShowComponent = () => {
      setShowComponent(!showComponent);
    };

  
  return (
    <div className='item-list'>
      <h2 onClick={toggleShowComponent}>People</h2>
      {showComponent && (
        <ul>
          {people.map(person => (
            <li key={person.url} onClick={() => onItemClick(person)}>
              {person.name}
            </li>
          ))}
        </ul>)
      }
    </div>
  );
}

export default PeopleList;