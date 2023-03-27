import React, { useContext } from 'react';
import { LangContext, ThemeContext } from '../App';

  


function Header() {
  const { language, setLanguage} = useContext(LangContext);
  const {theme , setTheme} = useContext(ThemeContext)


  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };




  return (
    <div>
      <div className="toggle__lang">
        <button className={language==="ukr" ? "active" : ""} onClick={()=>setLanguage("ukr")}>Українська</button>
        <button className={language==="eng" ? "active" : ""} onClick={()=>setLanguage("eng")}>English</button>
      </div>
      <div className="toggle__lang">
        <button className={theme==="light" ? "dark" : ""} onClick={()=>setTheme("ukr")}>{theme}</button>
        <button className={theme==="dark" ? "light" : ""} onClick={()=>setTheme("eng")}>{theme}</button>
      </div>
    </div>
  );
}

export default Header;
