import React, {useContext} from "react"
import styled from 'styled-components'
import axios from 'axios'
import { DivButton, GridPokemon, H1Home, Header, PokemonBox, ButtonPokedex, DetailButtons, GridPokedex } from "../styled/styles"
import { useHistory } from "react-router-dom"
import {goBack} from '../router/coordinations'
import pikachu from '../components/img/pikachu.png'
import GlobalStateContext from '../globalstate/globalstatecontext'
import PokeCard from "./pokemoncard"

function Pokedex () {

    const {buttonPokedex, setButtonPokedex, pokemon, setPokemon, pokeList, setPokeList, getPokemons, pokedex, states, setters, setPokedex, pokeDetails, setPokeDetails } = useContext(GlobalStateContext);

    const history = useHistory()
    
    return (
        <div>
            <div>
            <Header>
                <DivButton>
                <DetailButtons onClick={() => goBack(history)}>HOME</DetailButtons>
                </DivButton>
                <H1Home>Pokedex</H1Home>                

            </Header>

            <GridPokemon>

                <GridPokedex>
                {pokedex.map((poke) => {
              return (
                  <div>
              <PokeCard name={poke.name} url={poke.url} />
              
              </div>
              )
            })}
                </GridPokedex>
                
            </GridPokemon>

        </div>
        </div>
    )
}

export default Pokedex