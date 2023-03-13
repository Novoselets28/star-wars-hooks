import React, { useContext } from 'react';
import { LanguageContext } from './Functions/LanguageContext';

  


function Header() {
  const { language, setLanguage} = useContext(LanguageContext);


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
