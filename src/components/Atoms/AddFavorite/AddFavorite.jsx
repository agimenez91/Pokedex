import { useContext } from 'react'
import Button from '../Button/Button'
import { CommandContext } from '../../../context/CommandContext'


const AddFavorite = ({ pokemonId }) => {
    const { addFavouritePokemon } = useContext(CommandContext);

    // Add pokemon to favorites:
    const handleAddFavorite = () => {
        addFavouritePokemon(pokemonId);
    };

    return (
        <>
            <Button style='btn--like' ariaLabel='This is a like button, select it to save your favorite pokemon' click={handleAddFavorite}/>
        </>
    );
};

export default AddFavorite;
