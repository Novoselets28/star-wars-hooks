import React, { useState, useEffect } from 'react';
import CurrentPeople from './components/People/CurrentPeople';
import People from './components/People/People';
import CurrentPlanet from './components/Planets/CurrentPlanet';
import Planets from './components/Planets/Planets';
import CurrentStarship from './components/Starships/CurrentStarship';
import Starships from './components/Starships/Starships';
import './App.css'


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

  return (
    <div className='container'>
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
  );
}

export default App;


