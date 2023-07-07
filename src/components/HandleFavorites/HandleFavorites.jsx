import { useContext } from "react";
import { CommandContext } from "../../context/CommandContext";
import AddFavorite from "../Atoms/AddFavorite/AddFavorite";
import RemoveFavorite from "../Atoms/RemoveFavorite/RemoveFavorite";


export default function HandleFavorites({ pokemonId }) {
    const { favourites } = useContext(CommandContext);
    const isFavorite = favourites.includes(pokemonId);
  
    return isFavorite ? (
      <RemoveFavorite pokemonId={pokemonId} />
    ) : (
      <AddFavorite pokemonId={pokemonId} />
    );
  }
  