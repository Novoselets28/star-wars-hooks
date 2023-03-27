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
export const LanguageContext = createContext(null)

function App() {

  const [theme, setTheme] = useState("dark");
  
  const [language, setLanguage] = useState("eng")


  return (
          <div className={`container-${theme}`}>
            <LanguageContext.Provider value={{language, setLanguage}}>
              <ThemeContext.Provider value={{theme,setTheme}}>
                <AuthProvider>
                  <Header/>
                  <Routes>  
                  <Route path="login" element={<LoginPage/>}/>
                      <Route path='*' element={<ErrorPage/>} />
                      <Route path='home' element={
                        <RequireAuth>                      
                          <Layout />
                        </RequireAuth>
                      }/>
                      <Route path="/" element={
                        <RequireAuth>
                          <HomePage />
                        </RequireAuth>
                      }/>
                      <Route path="people" element={
                        <RequireAuth>
                          <People />
                        </RequireAuth>
                      }/>
                      <Route path="planets" element={
                        <RequireAuth>
                          <Planets/>
                        </RequireAuth>
                      } />
                      <Route path="starships" element={
                        <RequireAuth>
                          <Starships/>
                        </RequireAuth>
                      } />
                  </Routes>
                </AuthProvider>
              </ThemeContext.Provider>
            </LanguageContext.Provider>
            </div>                   
              
  );
}

export default App;

