import React, { useContext } from 'react';
import { LangContext, ThemeContext } from '../App';

  


function Header() {
  const { language, setLanguage} = useContext(LangContext);
  const {theme , setTheme} = useContext(ThemeContext)


  



  return (
    <div>
      <div className="button-box-lang">
        <button className={language==="ukr" ? "active" : "not-active"} onClick={()=>setLanguage("ukr")}>Українська</button>
        <button className={language==="eng" ? "not-active" : "active"} onClick={()=>setLanguage("eng")}>English</button>
      </div>
      <div className="button-box-theme">
        <button className={theme==="light" ? "dark" : ""} onClick={()=>setTheme("dark")}>Dark</button>
        <button className={theme==="dark" ? "light" : ""} onClick={()=>setTheme("light")}>Light</button>
      </div>
    </div>
  );
}

export default Header;
