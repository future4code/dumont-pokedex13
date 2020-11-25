import React, { useState, useEffect } from "react"
import { DivButton, GridPokemon, H1Home, Header, PokemonBox, ButtonPokedex, ButtonDetails } from "../styled/styles"
import { useHistory } from "react-router-dom"
import { goToPokedex, goToDetails } from '../router/coordinations'
import { useRequestData } from "../hooks/useRequestData"

import PokemonImage from "./PokemonImage" //Nova página onde renderiza a imagem


function Home(props) { 
  
  const history = useHistory()

  const getPokeList = useRequestData('https://pokeapi.co/api/v2/pokemon/?limit=20', [])

  

    return (
        <div>
            <Header>
                <DivButton>
                    <button onClick={() => goToPokedex(history)}>Ir para Pokedéx</button>
                </DivButton>
                <H1Home>Lista de Pokémons</H1Home>
            </Header>

            <GridPokemon>
                   {getPokeList && getPokeList.map(pokemon => {
                      return (
                          <PokemonBox  key={pokemon.name}>
                            {/* Renderizando a imagem no card */}
                            <PokemonImage pokemon={pokemon.name}/>
                            <p>{pokemon.name}</p>
                            <ButtonPokedex onClick={props.addPokemon}>Adicionar a Pokedéx</ButtonPokedex>
                            <ButtonDetails onClick={() => goToDetails(history)}>Ver detalhes</ButtonDetails>
                          </PokemonBox> 
                      )
                  })}
            </GridPokemon>
        </div>
     )
}

export default Home