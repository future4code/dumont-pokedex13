import React, { useState, useEffect, useContext } from "react"
import { DivButton, GridPokemon, H1Home, Header, PokemonBox, ButtonPokedex, ButtonDetails } from "../styled/styles"
import { useHistory } from "react-router-dom"
import { goToPokedex, goToDetails } from '../router/coordinations'
import { useRequestData } from "../hooks/useRequestData"

import PokemonImage from "./PokemonImage" //Nova página onde renderiza a imagem
import GlobalStateContext from "../Global/GlobalStateContext"


function Home() { 
  
    const {states,requests}=useContext(GlobalStateContext)
  
    const history = useHistory()

  
    useEffect(() => {
       requests.getPokemons()
    }, [])
  
    return (
        <div>
            <Header>
                <DivButton>
                    <button onClick={() => goToPokedex(history)}>Ir para Pokedéx</button>
                </DivButton>
                <H1Home>Lista de Pokémons</H1Home>
            </Header>

            <GridPokemon>
                   {states.pokemonList && states.pokemonList.map((item)=>{
                   return <PokemonImage url={item.url}/>
                   
                })}
        
                        
                        
                  
            </GridPokemon>
            
        </div>
     )
     
    }

export default Home

