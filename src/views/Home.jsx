import { useContext } from 'react'
import PokemonCard from '../components/PokemonCard/PokemonCard'
import { PokemonContext } from "../context/PokemonContext"

export default function Home () {

    const {allPokemons} = useContext(PokemonContext)

    return (
        <>
            {allPokemons.map(pokemon => (
                <PokemonCard pokemon={pokemon} key={pokemon.id} />
            ))}
        </>
    )
}