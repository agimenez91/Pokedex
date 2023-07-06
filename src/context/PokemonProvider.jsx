import { useEffect, useState } from "react"
import { PokemonContext } from "./PokemonContext"

export const PokemonProvider = ({children}) => {

    const [allPokemons, setAllPokemons] = useState([]);
	const [offset, setOffset] = useState(0);


    const getAllPokemons = async (limit = 20) => {
		const baseURL = 'https://pokeapi.co/api/v2/';

		const res = await fetch(
			`${baseURL}pokemon?limit=${limit}&offset=${offset}`
		);
		const data = await res.json();

		const promises = data.results.map(async pokemon => {
			const res = await fetch(pokemon.url);
			const data = await res.json();
			return data;
		});
		const results = await Promise.all(promises);

		setAllPokemons([...allPokemons, ...results]);
	};

    // Llamar a un pokemon por ID
	const getPokemonByID = async id => {
		const baseURL = 'https://pokeapi.co/api/v2/';

		const res = await fetch(`${baseURL}pokemon/${id}`);
		const data = await res.json();
		return data;
	};

    useEffect(() => {
		getAllPokemons();
	}, [offset]);

	// BTN CARGAR MÁS
	const onClickLoadMore = () => {
		setOffset(offset + 20);
	};

    
    return (
        <PokemonContext.Provider value={{
				allPokemons,
				getPokemonByID,	
				onClickLoadMore,		
        }}>
            {children}
        </PokemonContext.Provider>
    )
}