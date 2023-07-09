import { useContext } from 'react';
import { CommandContext } from '../../../context/index';
import { Button } from '../../index'


const RemoveFavorite = ({ pokemonId }) => {
    const { removeFavoritePokemon } = useContext(CommandContext);

    // Remove pokemon from favorites:
    const handleRemoveFavorite = () => {
        removeFavoritePokemon(pokemonId);
    };

    return (
        <>
            <Button style='btn--like active' ariaLabel='This is a like button, select it to save your favorite pokemon' click={handleRemoveFavorite}/>
        </>
    );
};

export default RemoveFavorite;
