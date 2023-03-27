import React, { useContext } from 'react';
import { LanguageContext } from '../../App';

function CurrentPlanet({ planets }) {

  const {language} = useContext(LanguageContext)


  return (
      <div className='selected-item'>
        <h3>{planets.name}</h3>
        <p>{language === 'ukr' ? 'Населення' : 'Population'}: {planets.population}</p>
        <p>{language === 'ukr' ? 'Період обертання' : 'Rotation period'}: {planets.rotation_period}</p>
        <p>{language === 'ukr' ? 'Діаметр' : 'Diameter'}: {planets.diameter}</p>
      </div>
  );
}

export default CurrentPlanet;