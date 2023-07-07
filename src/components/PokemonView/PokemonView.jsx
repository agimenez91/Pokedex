import { useContext, useEffect, useState } from 'react';
import Pagination from '../Atoms/Pagination/Pagination'
import './PokemonView.scss'
import { useParams } from 'react-router-dom';
import { PokemonContext } from '../../context/PokemonContext';
import Icon from '../Atoms/Icons/Icon';
import HandleFavorites from '../HandleFavorites/HandleFavorites';


export default function PokemonView () {
    const { getPokemonByID } = useContext(PokemonContext);
	const [pokemon, setPokemon] = useState({});
	const { id } = useParams();

    // Fetch Pokemon:
	const fetchPokemon = async id => {
		const data = await getPokemonByID(id);
		setPokemon(data);
	};

	useEffect(() => {
		fetchPokemon(id);
	}, [id]);


    return (
        <>
            <div className="pokemonView">
                <div className="pokemonView__row flex-align--center">
                    <p>#{pokemon.id}</p>
                    <HandleFavorites pokemonId={pokemon.id}/>
                </div>
                <div className='pokemonView__img'>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={`This is ${pokemon.name}'s picture`} />
                </div>
                <h1 className='capitalize'>{pokemon.name}</h1>
                <div className="pokemonView__column">
                    <div className="pokemonView__row">
                        <p className='title'>Type:</p>
                        {pokemon.types && (
                            <div>
                                {pokemon.types.map((type) => (
                                    <p className='capitalize txt-align--right' key={type.type.name}><Icon key={type.type.name} name={type.type.name}></Icon>{type.type.name}</p>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="pokemonView__row">
                        <p className='title'>Base experience:</p>
                        <p>{pokemon.base_experience} pt</p>
                    </div>
                    <div className="pokemonView__row">
                        <p className='title'>Weight:</p>
                        <p>{pokemon.weight} pounds</p>
                    </div>
                    <div className="pokemonView__row">
                        <p className='title'>Abilities:</p>
                        {pokemon.abilities && (
                            <div>
                                {pokemon.abilities.map((ability) => (
                                    <p className='txt-align--right capitalize' key={ability.ability.name}>{ability.ability.name}</p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <Pagination id={pokemon.id}/>
            </div>
        </>
    )
}