import './globalStyles/GlobalStyle.scss'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { PokemonProvider, CommandContext } from './context/index'
import { Error404, Home, Favorites, PokemonPage } from './views/index'
import { Topbar, Commands } from './components/index'



function App() {
  // Set theme mode and consult if there's saved info at local storage
  const [ theme, setTheme ] = useState(() => {
    const storedtheme = localStorage.getItem('theme');
    if (storedtheme) {
      return JSON.parse(storedtheme);
    }
    return ['light'];
  });

  const [ isActive, setIsActive ] = useState(false);

  // Set favorites and consult if there's saved info at local storage
  const [favourites, setFavourites] = useState(() => {
    const storedFavourites = localStorage.getItem('favourites');
    if (storedFavourites) {
      return JSON.parse(storedFavourites);
    }
    return [];
  });

  // Switch screen mode:
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  //Save theme mode in local storage
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  // Retry theme mode from local storage
  useEffect(() => {
    const storedtheme = localStorage.getItem('theme');
    if (storedtheme) {
      setTheme(JSON.parse(storedtheme));
    }
  }, []);

  // Switch pokemon list view:
  const handleView = () => {
    setIsActive(current => !current);
  };

  // Add to favorites:
  const addFavouritePokemon = (pokemonId) => {
      const newFavouriteList = [...favourites, pokemonId];
      setFavourites(newFavouriteList)
  }

  // Remove from favorites:
  const removeFavoritePokemon = (pokemonId) => {
    setFavourites((prevFavorites) =>
      prevFavorites.filter((id) => id !== pokemonId)
    );
  };  

  // Save favorites in local storage
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  // Retry favorites from local storage
  useEffect(() => {
    const storedFavourites = localStorage.getItem('favourites');
    if (storedFavourites) {
      setFavourites(JSON.parse(storedFavourites));
    }
  }, []);

  return (
    <>
      <CommandContext.Provider value={{ theme, toggleTheme, handleView, addFavouritePokemon, removeFavoritePokemon, favourites }}>
        <PokemonProvider>
          <main className="main" data-theme={theme}> 
            <div className="pokedex">
              <Topbar></Topbar>
              <div className='pokedex__area'>
                <div className='pokedex__screen'>
                  <Routes>
                    <Route path='/' element={<Home list={isActive} />} />
                    <Route path='/Favorites' element={<Favorites list={isActive} />} />
                    <Route path='pokemon/:id/' element={<PokemonPage/>}/>
                    <Route path='*' element={<Error404/>} />
                    <Route path="/Favorites" element={<Navigate to="/Favorites"/>} />
                    <Route path="pokemon/:id/" element={<Navigate to="pokemon/:id/"/>} />
                    <Route path="*" element={<Navigate to="/404"/>} />
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
          </main> 
        </PokemonProvider>
      </CommandContext.Provider>
    </>
  )
}

export default App
