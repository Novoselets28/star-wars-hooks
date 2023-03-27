import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import CurrentStarship from './CurrentStarship';
import StarshipsList from './StarshipsList';

export default function Starships() {

  const [starships, setStarships] = useState([]);
  const [selectedStarships, setSelectedStarships] = useState(null);

  const navigate = useNavigate()
  const goBack = () => navigate(-1)

    useEffect(() => {
        fetch('https://swapi.dev/api/starships/')
        .then(response => response.json())
        .then(data => setStarships(data.results));
    }, []);

    const handleStarshipClick = (starship) => {
        setSelectedStarships(starship);
      }
      
  return (
    <div className='item-block'>
      <StarshipsList starships={starships} onItemClick={handleStarshipClick} />
        {selectedStarships && <CurrentStarship starships={selectedStarships} />}
      <button onClick={goBack}>Go back</button>
    </div>
  )
}
