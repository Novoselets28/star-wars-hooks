import React, { useContext, useState } from 'react';
import { LanguageContext } from '../../App';

function PeopleList({ people, onItemClick }) {

  const [showComponent, setShowComponent] = useState(false);

  const {language} = useContext(LanguageContext)


  const toggleShowComponent = () => {
      setShowComponent(!showComponent);
    };

  
  return (
    <div className='item-list'>
      <h2 onClick={toggleShowComponent}>{language === 'ukr' ? 'Люди' : 'People'}</h2>
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