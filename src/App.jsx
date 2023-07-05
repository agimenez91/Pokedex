import { Navigate, Route, Routes } from 'react-router-dom'
import './globalStyles/GlobalStyle.scss'
import Home from './views/Home'
import PokemonPage from './views/PokemonPage'
import Topbar from './components/Topbar/Topbar'
import Commands from './components/Commands/Commands'

function App() {

  return (
    <>
      <div className="pokedex">
        <Topbar></Topbar>
        <div className='pokedex__area'>
          <div className="pokedex__screen">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='pokemon/:id' element={<PokemonPage/>}/>
              <Route path='*' element={<Navigate to='/' />} />
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
    </>
  )
}

export default App
