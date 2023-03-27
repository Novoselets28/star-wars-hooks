import React, { useContext } from 'react';
import { LanguageContext } from '../../App';

function CurrentPeople({ person }) {

  const {language} = useContext(LanguageContext)

  
  return (
    <div className='selected-item'>
      <h3>{person.name}</h3>
      <p>{language === 'ukr' ? 'Стать' : 'Gender'}: {person.gender}</p>
      <p>{language === 'ukr' ? 'Рік народження' : 'Birth year'}: {person.birth_year}</p>
      <p>{language === 'ukr' ? 'Колір очей' : 'Eye color'}: {person.eye_color}</p>
    </div>
  );
}

export default CurrentPeople;

