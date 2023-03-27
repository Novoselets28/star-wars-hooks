import React, { useContext, useState } from 'react';
import { LanguageContext } from '../../App';

function StarshipsList({ starships, onItemClick }) {

  const [showComponent, setShowComponent] = useState(false);

  const {language} = useContext(LanguageContext)


  const toggleShowComponent = () => {
      setShowComponent(!showComponent);
    };

  
  return (
    <div className='item-list'>
      <h2 onClick={toggleShowComponent}>{language === 'ukr' ? 'Зоряні кораблі' : 'Starships'}</h2>
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