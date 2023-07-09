import { useContext } from 'react';
import { CommandContext } from '../../context/CommandContext';
import { AddFavorite, RemoveFavorite } from '../index'


export default function HandleFavorites({ pokemonId }) {
    const { favourites } = useContext(CommandContext);
    const isFavorite = favourites.includes(pokemonId);
  
    return isFavorite ? (
      <RemoveFavorite pokemonId={pokemonId} />
    ) : (
      <AddFavorite pokemonId={pokemonId} />
    );
  }
  