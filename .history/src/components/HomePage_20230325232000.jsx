import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { LangContext } from '../App';
import { useAuth } from '../hook/useAuth';

const HomePage = () => {

  const {signout} = useAuth();
  const navigate = useNavigate()

  const {currentLang} = useContext(LangContext)

  

  return (
    <div className='home-page'>
      <h1>{currentLang==='ukr' ? 'Ласкаво просимо в додаток SWAPI!' : 'Welcome to SWAPI App!'}</h1>
      <p>{currentLang==="ukr" ? "Ця програма використовує API Star Wars (SWAPI) для відображення інформації про персонажів Star Wars, планети тощо."
       :"This application uses the Star Wars API (SWAPI) to display information about Star Wars characters, planets, and more."}</p>
      <button onClick={() => signout(() => navigate('/', {replace: true}))} >Log out</button>
    </div>
  );
};

export default HomePage;
