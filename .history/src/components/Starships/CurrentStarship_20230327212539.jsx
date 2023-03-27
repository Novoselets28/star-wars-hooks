import React, { useContext } from 'react';
import { LanguageContext } from '../../App';

function CurrentStarship({ starships }) {

  const {language} = useContext(LanguageContext)

  return (
    <div className='selected-item'>
      <h3>{starships.name}</h3>
          <p>{language === 'ukr' ? 'Виробник' : 'Manufacturer'}: {starships.manufacturer}</p>
          <p>{language === 'ukr' ? 'Клас кораблів' : 'Starship class'}: {starships.starship_class}</p>
          <p>{language === 'ukr' ? 'Витратні матеріали' : 'Consumables'}: {starships.consumables}</p>
    </div>
  );
}

export default CurrentStarship;