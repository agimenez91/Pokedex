import './Favorites.scss'
import { useContext, useEffect } from 'react'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { PokemonContext } from "../../context/PokemonContext"
import { CommandContext } from '../../context/CommandContext';

export default function Favorites ( props ) {

    const { allPokemons } = useContext(PokemonContext);
    const { favourites } = useContext(CommandContext);
    const favoritePokemons = allPokemons.filter(pokemon => favourites.includes(pokemon.id));

    useEffect(() => {
    }, [allPokemons]);

    return (
        <>
            <div className={props.list ? 'pokemon-list screen--list' : 'pokemon-list'}>
                {favoritePokemons.map(pokemon => (
                    <PokemonCard pokemon={pokemon} key={pokemon.id} />
                ))}
            </div>
        </>
    )
}