
import React, { useContext, useEffect, useState } from "react"
import styled from 'styled-components'
import axios from 'axios'
import { DivButton, GridPokemon, H1Home, Header, PokemonBox } from "../styled/styles"
import { useHistory } from "react-router-dom"
import { goToPokedex, goToDetails } from '../router/coordinations'
import { useRequestData } from "../hooks/useRequestData"
import PokeCard from "./pokemoncard"
import GlobalStateContext from "../globalstate/globalstatecontext"

import PokemonImage from "./PokemonImage" //Nova página onde renderiza a imagem
import GlobalStateContext from "../Global/GlobalStateContext"

    const history = useHistory()

    const {pokeImage, setPokeImage, getPokeImage, pokemon, setPokemon, getPokemons, pokedex, setPokedex, pokeDetails, setPokeDetails} = useContext(GlobalStateContext);


function Home() { 

  
    useEffect(() => {
       getPokemons()
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
                        {pokemon.map((poke)=>{
                            return <PokeCard name={poke.name} url={poke.url} />
                        })}
                        </GridPokemon>

            </Header>


                        
                        
                  
            </GridPokemon>
            
        </div>
     )
     
    }

export default Home

