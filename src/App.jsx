import { Route, Routes } from 'react-router-dom'
import './globalStyles/GlobalStyle.scss'
import Home from './views/Home'
import PokemonPage from './views/PokemonPage'
import Topbar from './components/Topbar/Topbar'
import Commands from './components/Commands/Commands'
import { PokemonProvider } from './context/PokemonProvider'
import { useState } from 'react'
import { CommandContext } from './context/CommandContext'
import Error404 from './views/Eror404/Error404'

function App() {
  const [theme, setTheme] = useState("light");
  const [isActive, setIsActive] = useState(false);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const handleView = () => {
    setIsActive(current => !current);
  };

  return (
    <>
      <CommandContext.Provider value={{ theme, toggleTheme, handleView }}>
        <PokemonProvider>
          <div className="main" data-theme={theme}> 
            <div className="pokedex">
              <Topbar></Topbar>
              <div className='pokedex__area'>
                <div className={isActive ? 'pokedex__screen screen--list' : 'pokedex__screen'}>
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='pokemon/:id/' element={<PokemonPage/>}/>
                    <Route path='*' element={<Error404/>} />
                  </Routes>
                </div>
                <div className="pokedex__console">
                  <div className="decoration decoration--black decoration--black--big">
                      <p>La Pokédex es una enciclopedia electrónica que registra información acerca de los Pokémon. Este dispositivo registra datos cuando capturas un Pokémon y muestra su imagen y detalles.</p>
                  </div>
                  <Commands/>
                  <div className='decoration__row--special'>
                      <div className='decoration__row'>
                          <div className="decoration decoration--white"></div>
                          <div className="decoration decoration--white"></div>
                      </div>
                      <div className="decoration decoration--yellow"></div>
                  </div>
                  <div className='decoration__row'>
                      <div className="decoration decoration--black"></div>
                      <div className="decoration decoration--black"></div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </PokemonProvider>
      </CommandContext.Provider>
    </>
  )
}

export default App
