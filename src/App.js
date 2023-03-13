import React, { useState, useEffect } from 'react';
import CurrentPeople from './components/People/CurrentPeople';
import People from './components/People/People';
import CurrentPlanet from './components/Planets/CurrentPlanet';
import Planets from './components/Planets/Planets';
import CurrentStarship from './components/Starships/CurrentStarship';
import Starships from './components/Starships/Starships';
import './App.css'
import ThemeContextProvider from './components/Functions/ThemeContext';
import { LanguageProvider } from './components/Functions/LanguageContext';




function App() {
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const [starships, setStarships] = useState([]);
  const [selectedStarships, setSelectedStarships] = useState(null);




  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => setPeople(data.results));

      fetch('https://swapi.dev/api/planets/')
      .then(response => response.json())
      .then(data => setPlanets(data.results));

      fetch('https://swapi.dev/api/starships/')
      .then(response => response.json())
      .then(data => setStarships(data.results));
  }, []);


  
  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  }

  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
  }

  const handleStarshipClick = (starship) => {
    setSelectedStarships(starship);
  }
  
  
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () =>{
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const [language, setLanguage] = useState('eng');


  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  
  

  return (
    <ThemeContextProvider>
      <LanguageProvider>
        <header className={`header-${theme}`}>
          <div className='language-selector__container'>
            <label htmlFor="language-select">
              <select id="language-select" value={language} onChange={handleLanguageChange}>
              <option value="eng">English</option>
              <option value="ukr">Українська</option>
            </select>
          </label>  
          </div>
            <input className='input-theme' onClick={toggleTheme} type='checkbox' id='darkmode-toggle'/>
            <label className='label-theme' htmlFor='darkmode-toggle' ></label>
        </header>
        <div className={`container-${theme}`}>
          <div className='item-block'>
              <People people={people} onItemClick={handlePersonClick} />
                {selectedPerson && <CurrentPeople person={selectedPerson} />}
          </div>
          <div className='item-block'>
            <Planets planets={planets} onItemClick={handlePlanetClick} />
              {selectedPlanet && <CurrentPlanet planets={selectedPlanet} />}
          </div>
          <div className='item-block'>
            <Starships starships={starships} onItemClick={handleStarshipClick} />
              {selectedStarships && <CurrentStarship starships={selectedStarships} />}
          </div>
        </div> 
      </LanguageProvider>
      </ThemeContextProvider>
              
  );
}

export default App;


