
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

function Home() { 

    const history = useHistory()

    const {pokeImage, setPokeImage, getPokeImage, pokemon, setPokemon, pokeList, setPokeList, getPokemons, pokedex, setPokedex, pokeDetails, setPokeDetails} = useContext(GlobalStateContext);

  
    useEffect(() => {
       getPokemons()
    }, [])

    const addPoke = (newItem) =>{
        const index = pokeList.findIndex((i)=> i.name === newItem.name)

        let newPokedex = [... pokedex]

        newPokedex.push({...newItem})

        setPokedex(newPokedex)

        let newPokeList = [... pokeList]

        newPokeList.splice(index, 1)

        setPokeList(newPokeList)

        alert(`${newItem.name} foi adicionado a Pokedex!`)
    }
  
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
            
        </div>
     )
     
    }

export default Home

