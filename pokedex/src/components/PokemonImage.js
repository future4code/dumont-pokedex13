import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GridPokemon,PokemonBox,ButtonDetails,ButtonPokedex } from '../styled/styles'
import { useHistory } from "react-router-dom"
import { goToPokedex, goToDetails } from '../router/coordinations'
//Página da imagem do Pokémon
 function PokemonImage(props) {

const history = useHistory()
const[pokemon,setPokemon]=useState(undefined)

useEffect(()=>{
getPokemonData()

},[]
)
const getPokemonData=()=>{
axios.get(props.url)
.then((response)=>{
    setPokemon(response.data)
})
.catch((error)=>{
    console.log(error)
})

}
    
    return (
        <GridPokemon>
        {pokemon && <PokemonBox>
          <img src={pokemon.sprites.front_default} />
          <p>{pokemon.name}</p>
        <ButtonPokedex onClick={''}>Adicionar a Pokedéx</ButtonPokedex>
        <ButtonDetails onClick={() => goToDetails(history)}>Ver detalhes</ButtonDetails>
          </PokemonBox>

            
          }
         
            </GridPokemon>
    
        
    )
 }
export default PokemonImage