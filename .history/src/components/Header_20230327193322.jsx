import React, { useContext } from 'react';
import { LangContext, ThemeContext } from '../App';

  


function Header() {
  const { language, setLanguage} = useContext(LangContext);
  const {theme , setTheme} = useContext(ThemeContext)


  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleChangeTheme = () =>{
    setCurrentTheme(!currentTheme)
    }
    const toggleTheme = () => {
          setTheme(theme === 'light' ? 'dark' : 'light');
        };




  return (
    <div>
      <label htmlFor="language-select">Choose Language:</label>
      <select id="language-select" value={language} onChange={handleLanguageChange}>
        <option value="eng">English</option>
        <option value="ukr">Українська</option>
      </select>
      <div className="toggle__lang">
                <button className={theme==="ukr" ? "active" : ""} onClick={()=>setTheme("ukr")}>Українська</button>
                <button className={theme==="eng" ? "active" : ""} onClick={()=>setTheme("eng")}>English</button>
            </div>
    </div>
  );
}

export default Header;
