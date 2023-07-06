import { useContext, useState } from "react";
import PokemonView from "../components/PokemonView/PokemonView";
import { PokemonContext } from "../context/PokemonContext";
import { useParams } from "react-router-dom";


export default function PokemonPage () {
    
    return (
        <>
            <PokemonView pokemon='' />
        </>
    )
}