import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext, ThemeContext } from '../App';

  


function Header() {
  const {language , setLanguage} = useContext(LanguageContext)
  
  const {theme, setTheme} = useContext(ThemeContext);


  return (
    <header className='header'>
        <div className='button-box-lang'>
          <button className={language==="ukr" ? "active" : "not-active"} onClick={()=>setLanguage("ukr")}>Українська</button>
          <button className={language==="eng" ? "active" : "not-active"} onClick={()=>setLanguage("eng")}>English</button>
        </div>
        <div className='navigate-block'>
          <Link to='/home'>HomePage</Link>
          <Link to='people'>People</Link>
          <Link to='/planets'>Planets</Link>
          <Link to='/starships'>Starships</Link>
        </div>
        <div className='button-box-theme'>
          <button className={theme==="dark" ? "btn-dark" : "btn-light"} onClick={()=>setTheme("dark")}>dark</button>
          <button className={theme==="light" ? "btn-dark" : "btn-light"} onClick={()=>setTheme("light")}>light</button>
        </div>
    </header>
  )
}

export default Header;
