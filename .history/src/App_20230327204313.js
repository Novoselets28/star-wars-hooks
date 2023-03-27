import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import HomePage from './components/HomePage';
import People from './components/People/People';
import Planets from './components/Planets/Planets';
import Starships from './components/Starships/Starships';
import LoginPage from './components/LoginPage';
import RequireAuth from './hoc/RequireAuth';
import AuthProvider from './hoc/AuthProvider'
import Layout from './components/Layout';
import ErrorPage from './components/ErrorPage';



export const ThemeContext = createContext();
export const LangContext = createContext(null)

function App() {

  const [theme, setTheme] = useState("dark");
  
  const [language, setLanguage] = useState("eng")


  return (
          <div className={`container-${theme}`}>
            <LangContext.Provider value={{language, setLanguage}}>
              <ThemeContext.Provider value={{theme,setTheme}}>
                <AuthProvider>
                  <Header/>
                  <Routes>  
                      <Route path='/' element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path='people' element={<People/>}/>
                        <Route path='planets' element={<Planets/>}/>
                        <Route path='starships' element={<Starships/>}/>
                        <Route path='login' element={<LoginPage/>}/>
                      </Route>
                  </Routes>
                </AuthProvider>
              </ThemeContext.Provider>
            </LangContext.Provider>
            </div>                   
              
  );
}

export default App;


