import React, { useEffect, useState } from 'react'
import axios from 'axios'


//Página da imagem do Pokémon
 function PokemonImage(props) {
    const [pokemon, setPokemon] = useState({})


    useEffect(() => {
        getPokemonImage(props.pokemon)
    }, [props.pokemon])
    

    const getPokemonImage = pokeName => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(response => {
            setPokemon(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }


    return (
        <div>
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}   
        </div>
    )
}
export default PokemonImage