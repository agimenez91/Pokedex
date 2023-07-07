import { useContext } from "react";
import Button from "../Button/Button"
import { CommandContext } from "../../../context/CommandContext";


const RemoveFavorite = ({ pokemonId }) => {
    const { removeFavoritePokemon } = useContext(CommandContext);

    const handleRemoveFavorite = () => {
        removeFavoritePokemon(pokemonId);
    };

    console.log(pokemonId)

    return (
        <>
            <Button style='btn--like active' ariaLabel='This is a like button, select it to save your favorite pokemon' click={handleRemoveFavorite}/>
        </>
    );
};

export default RemoveFavorite;
