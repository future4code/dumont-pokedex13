import React, { useEffect, useState } from 'react'
import { DivButton, GridPokemon, H1Home, Header, PokemonBox, ButtonPokedex, ButtonDetails } from "../styled/styles"
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
            // console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }


    return (
        <div>
          <PokemonBox>
        <p>{pokemon.name}</p>
      
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
        </PokemonBox>

        <PokemonBox>
        {pokemon.sprites && (
          <img src={pokemon.sprites.back_default} alt={pokemon.name} />
        )}
        </PokemonBox>
        </div>
    )
}
export default PokemonImage