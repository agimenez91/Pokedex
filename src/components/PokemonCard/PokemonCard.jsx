import { Link } from 'react-router-dom';
import Icon from '../Atoms/Icons/Icon';
import './PokemonCard.scss';
import AddFavorite from '../Atoms/AddFavorite/AddFavorite';
import HandleFavorites from '../HandleFavorites/HandleFavorites';


export default function PokemonCard ({pokemon}) {

    return (
        <>
            <div className="pokemon-card ">
                <div className="pokemon-card__img">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={`This is ${pokemon.name}'s picture`} />
                </div>
                <div className="pokemon-card__identifiers">
                    <p>#{pokemon.id}</p>
                    <p className='capitalize'>{pokemon.name}</p>
                </div>
                <div className="pokemon-card__tags">
                    <div className="flex">
                        {pokemon.types.map(type => (
                            <Icon key={type.type.name} name={type.type.name}></Icon>
                        ))}
                    </div>
                    <HandleFavorites pokemonId={pokemon.id}/>
                </div>
                <Link aria-label={`This link goes to ${pokemon.name}'s page`} className='pokemon-card__url' to={`/pokemon/${pokemon.id}`} />
            </div>
        </>
    )
}