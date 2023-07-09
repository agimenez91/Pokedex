import './Home.scss'
import { useContext, useEffect } from 'react'
import { PokemonContext } from "../../context"
import { PokemonCard } from '../../components/index';

export default function Home ( props ) {

    const { allPokemons, onClickLoadMore } = useContext(PokemonContext);

    useEffect(() => {
    }, [allPokemons]);


    return (
        <>
            <div className={props.list ? 'pokemon-list screen--list' : 'pokemon-list'}>
                {allPokemons.map(pokemon => (
                    <PokemonCard pokemon={pokemon} key={pokemon.id} />
                ))}
                <p className='pagination--loadMore' onClick={onClickLoadMore}>Load More</p>
            </div>
        </>
    )
}