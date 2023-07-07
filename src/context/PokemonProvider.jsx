import { useEffect, useState } from "react"
import { PokemonContext } from "./PokemonContext"

export const PokemonProvider = ({children}) => {

    const [allPokemons, setAllPokemons] = useState([]);
	const [offset, setOffset] = useState(0);

	// Print 20 pokemons:
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

    // Print pokemon by ID:
	const getPokemonByID = async id => {
		const baseURL = 'https://pokeapi.co/api/v2/';

		const res = await fetch(`${baseURL}pokemon/${id}`);
		const data = await res.json();
		return data;
	};

	// Load the next 20 pokemons:
	const onClickLoadMore = () => {
		setOffset(offset + 20);
	};

    useEffect(() => {
		getAllPokemons();
	}, [offset]);

    
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