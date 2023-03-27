import React, { useContext } from 'react';
import { LangContext } from '../App';

  


function Header() {
  const { language, setLanguage} = useContext(LangContext);


  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };




  return (
    <div>
      <label htmlFor="language-select">Choose Language:</label>
      <select id="language-select" value={language} onChange={handleLanguageChange}>
        <option value="eng">English</option>
        <option value="ukr">Українська</option>
      </select>
    </div>
  );
}

export default Header;
