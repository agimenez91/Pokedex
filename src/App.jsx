import { Route, Routes } from 'react-router-dom'
import './globalStyles/GlobalStyle.scss'
import Home from './views/Home/Home'
import PokemonView from './views/PokemonView/PokemonView'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:pokemonID" element={<PokemonView />} />
      </Routes>
    </>
  )
}

export default App
