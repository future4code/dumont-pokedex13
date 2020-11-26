import React, { useState, useEffect } from "react"
import { DivButton, GridPokemon, H1Home, Header, PokemonBox, ButtonPokedex, ButtonDetails, HeaderDetails } from "../styled/styles"
import { useHistory } from "react-router-dom"
import { goToPokedex, goToDetails } from '../router/coordinations'
import { useRequestData } from "../hooks/useRequestData"




function Details() { 
  
  const history = useHistory()

  //const getPokeList = useRequestData('https://pokeapi.co/api/v2/pokemon/?limit=20', [])
  

    return (
        <div>
            <HeaderDetails>
                <DivButton>
                <button onClick={() => goToPokedex(history)}>Ir para Pokedéx</button>
                </DivButton>
                <H1Home>Lista de Pokémons</H1Home>
                <DivButton>
                <button onClick={() => goToPokedex(history)}>Ir para Home</button>
                </DivButton>
            </HeaderDetails>

        </div>
     )
}

export default Details