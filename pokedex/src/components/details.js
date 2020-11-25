import React, { useState, useEffect } from "react"
import { DivButton, GridPokemon, H1Home, Header, PokemonBox, ButtonPokedex, ButtonDetails, HeaderDetails } from "../styled/styles"
import { useHistory } from "react-router-dom"
import { goToPokedex, goToDetails } from '../router/coordinations'
import { useRequestData } from "../hooks/useRequestData"

import PokemonDetails from "./PokemonDetails" //Nova página onde renderiza a imagem


function Details() { 
  
  const history = useHistory()

  const getPokeList = useRequestData('https://pokeapi.co/api/v2/pokemon/?limit=20', [])
  

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

            <GridPokemon>
                   {getPokeList && getPokeList.map(pokemon => {
                      return (
                          <PokemonBox  key={pokemon.name}>
                            {/* Renderizando a imagem no card */}
                            <PokemonDetails pokemon={pokemon.name}/>
                            <p>{pokemon.name}</p>
                          </PokemonBox> 
                      )
                  })}
            </GridPokemon>
        </div>
     )
}

export default Details