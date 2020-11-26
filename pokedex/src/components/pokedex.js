import React, {useContext} from "react"
import styled from 'styled-components'
import axios from 'axios'
import { DivButton, GridPokemon, H1Home, Header, PokemonBox } from "../styled/styles"
import { useHistory } from "react-router-dom"
import {goBack} from '../router/coordinations'
import pikachu from '../components/img/pikachu.png'
import GlobalStateContext from '../globalstate/globalstatecontext'
import PokeCard from "./pokemoncard"

function Pokedex () {

    const {buttonPokedex, setButtonPokedex, pokemon, setPokemon, pokeList, setPokeList, getPokemons, pokedex, setPokedex, pokeDetails, setPokeDetails } = useContext(GlobalStateContext);

    const history = useHistory()

    return (
        <div>
            <div>
            <Header>
                <DivButton>
                <button onClick={() => goBack(history)}>Ir para Home</button>
                </DivButton>
                <H1Home>Pokedex</H1Home>                

            </Header>

            <GridPokemon>

                <PokemonBox>
                {pokedex.map((poke) => {
              return <PokeCard name={poke.name} url={poke.url} />
            })}
                </PokemonBox>
                
            </GridPokemon>

        </div>
        </div>
    )
}

export default Pokedex