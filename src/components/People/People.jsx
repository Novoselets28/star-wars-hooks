import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import CurrentPeople from './CurrentPeople';
import PeopleList from './PeopleList';

export default function People() {

    const [people, setPeople] = useState([]);
    const [selectedPerson, setSelectedPerson] = useState(null);

    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .then(data => setPeople(data.results));
    }, []);

    const handlePersonClick = (person) => {
        setSelectedPerson(person);
      }
  return (
    <div className='item-block'>
      <PeopleList people={people} onItemClick={handlePersonClick} />
        {selectedPerson && <CurrentPeople person={selectedPerson} />}
      <button onClick={goBack}>Go back</button>
    </div>
  )
}
