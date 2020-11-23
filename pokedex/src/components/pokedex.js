import React from "react"
import styled from 'styled-components'
import axios from 'axios'
import { DivButton, GridPokemon, H1Home, Header, PokemonBox } from "../styled/styles"
import { useHistory } from "react-router-dom"
import {goBack} from '../router/coordinations'
import pikachu from '../components/img/pikachu.png'

function Pokedex () {

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
                    <img src={pikachu} />
                    <button>Remover Pokémon</button>
                    <button>Ver detalhes</button>
                </PokemonBox>

                <PokemonBox>
                <img src={pikachu} />
                    <button>Remover Pokémon</button>
                    <button>Ver detalhes</button>
                </PokemonBox>

                <PokemonBox>
                <img src={pikachu} />
                    <button>Remover Pokémon</button>
                    <button>Ver detalhes</button>
                </PokemonBox>

                <PokemonBox>
                <img src={pikachu} />
                    <button>Remover Pokémon</button>
                    <button>Ver detalhes</button>

                </PokemonBox>
                
            </GridPokemon>

        </div>
        </div>
    )
}

export default Pokedex