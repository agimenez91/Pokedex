import { useContext, useEffect } from 'react'
import PokemonCard from '../components/PokemonCard/PokemonCard'
import { PokemonContext } from "../context/PokemonContext"

export default function Home () {

    const { allPokemons, onClickLoadMore } = useContext(PokemonContext);

    useEffect(() => {
    }, [allPokemons]);

    return (
        <>
            {allPokemons.map(pokemon => (
                <PokemonCard pokemon={pokemon} key={pokemon.id} />
            ))}
            <p className='pagination--loadMore' onClick={onClickLoadMore}>Load More</p>
        </>
    )
}