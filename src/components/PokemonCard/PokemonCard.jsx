import { Link } from 'react-router-dom';
import Button from '../Atoms/Button/Button';
import Icon from '../Atoms/Icons/Icon';
import './PokemonCard.scss';


export default function PokemonCard ({pokemon}) {
    return (
        <>
            <div className="pokemon-card ">
                <div className="pokemon-card__img">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={`This ${pokemon.name}'s picture`} />
                </div>
                <div className="pokemon-card__identifiers">
                    <p>#{pokemon.id}</p>
                    <p>{pokemon.name}</p>
                </div>
                <div className="pokemon-card__tags">
                    <div className="flex">
                        {pokemon.types.map(type => (
                            <Icon key={type.type.name} name={type.type.name}></Icon>
                        ))}
                    </div>
                    <Button style='btn--like' ariaLabel='This is a like button, select it to save your favorite pokemon'/>
                </div>
                <Link className='pokemon-card__url' to={`/pokemon/${pokemon.name}`} />
            </div>
        </>
    )
}