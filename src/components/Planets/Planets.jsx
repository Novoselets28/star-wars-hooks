import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import CurrentPlanet from './CurrentPlanet';
import PlanetsList from './PlanetsList';

export default function Planets() {

  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  

  useEffect(() => {
      fetch('https://swapi.dev/api/planets/')
      .then(response => response.json())
      .then(data => setPlanets(data.results));
  }, []);

    const handlePlanetClick = (planet) => {
        setSelectedPlanet(planet);
      }

  return (
    <div className='item-block'>
      <PlanetsList planets={planets} onItemClick={handlePlanetClick} />
        {selectedPlanet && <CurrentPlanet planets={selectedPlanet} />}
      <button onClick={goBack}>Go back</button>
            </div>
  )
}
