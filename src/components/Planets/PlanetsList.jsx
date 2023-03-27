import React, { useContext, useState } from 'react';
import { LanguageContext } from '../../App';

function PlanetsList({ planets, onItemClick }) {

  const [showComponent, setShowComponent] = useState(false);

  const {language} = useContext(LanguageContext)


  const toggleShowComponent = () => {
      setShowComponent(!showComponent);
    };

  
  return (
    <div className='item-list'>
      <h2 onClick={toggleShowComponent}>{language === 'ukr' ? 'Планети' : 'Planets'}</h2>
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