import React from "react"
import styled from 'styled-components'
import axios from 'axios'
import { DivButton, GridPokemon, H1Home, Header, PokemonBox } from "../styled/styles"
import { useHistory } from "react-router-dom"
import {goToPokedex, goToDetails} from '../router/coordinations'
import pikachu from "../components/img/pikachu.png"

function Home() {

    const history = useHistory()

    return (
        <div>
            <Header>
                <DivButton>
                    <button onClick={() => goToPokedex(history)}>Ir para Pokedéx</button>
                </DivButton>
                <H1Home>Lista de Pokémons</H1Home>
            </Header>


            <GridPokemon>
                <PokemonBox>
                    <img src={pikachu} />
                    <button>Adicionar a Pokedéx</button>
                    <button onClick={() => goToDetails(history)}>Ver detalhes</button>
                </PokemonBox>
                <PokemonBox>
                <img src={pikachu} />
                    <button>Adicionar a Pokedéx</button>
                    <button onClick={() => goToDetails(history)}>Ver detalhes</button>
                </PokemonBox>
                <PokemonBox>
                <img src={pikachu} />
                    <button>Adicionar a Pokedéx</button>
                    <button onClick={() => goToDetails(history)}>Ver detalhes</button>
                </PokemonBox>
                <PokemonBox>
                <img src={pikachu} />
                    <button>Adicionar a Pokedéx</button>
                    <button onClick={() => goToDetails(history)}>Ver detalhes</button>
                </PokemonBox>
                <PokemonBox>
                    <img src={pikachu} />
                    <button>Adicionar a Pokedéx</button>
                    <button onClick={() => goToDetails(history)}>Ver detalhes</button>
                </PokemonBox>
                <PokemonBox>
                    <img src={pikachu} />
                    <button>Adicionar a Pokedéx</button>
                    <button onClick={() => goToDetails(history)}>Ver detalhes</button>
                </PokemonBox>
                <PokemonBox>
                    <img src={pikachu} />
                    <button>Adicionar a Pokedéx</button>
                    <button onClick={() => goToDetails(history)}>Ver detalhes</button>
                </PokemonBox>
                <PokemonBox>
                    <img src={pikachu} />
                    <button>Adicionar a Pokedéx</button>
                    <button onClick={() => goToDetails(history)}>Ver detalhes</button>
                </PokemonBox>
                <PokemonBox>
                    <img src={pikachu} />
                    <button>Adicionar a Pokedéx</button>
                    <button onClick={() => goToDetails(history)}>Ver detalhes</button>
                </PokemonBox>
                <PokemonBox>
                    <img src={pikachu} />
                    <button>Adicionar a Pokedéx</button>
                    <button onClick={() => goToDetails(history)}>Ver detalhes</button>
                </PokemonBox>
                <PokemonBox>
                    <img src={pikachu} />
                    <button>Adicionar a Pokedéx</button>
                    <button onClick={() => goToDetails(history)}>Ver detalhes</button>
                </PokemonBox>
                <PokemonBox>
                    <img src={pikachu} />
                    <button>Adicionar a Pokedéx</button>
                    <button onClick={() => goToDetails(history)}>Ver detalhes</button>
                </PokemonBox>
                <PokemonBox>
                    <img src={pikachu} />
                    <button>Adicionar a Pokedéx</button>
                    <button onClick={() => goToDetails(history)}>Ver detalhes</button>
                </PokemonBox>
                <PokemonBox>
                    <img src={pikachu} />
                    <button>Adicionar a Pokedéx</button>
                    <button onClick={() => goToDetails(history)}>Ver detalhes</button>
                </PokemonBox>
                <PokemonBox>
                    <img src={pikachu} />
                    <button>Adicionar a Pokedéx</button>
                    <button onClick={() => goToDetails(history)}>Ver detalhes</button>
                </PokemonBox>
                <PokemonBox>
                    <img src={pikachu} />
                    <button>Adicionar a Pokedéx</button>
                    <button onClick={() => goToDetails(history)}>Ver detalhes</button>
                </PokemonBox>
                <PokemonBox>
                    <img src={pikachu} />
                    <button>Adicionar a Pokedéx</button>
                    <button onClick={() => goToDetails(history)}>Ver detalhes</button>
                </PokemonBox>
                <PokemonBox>
                    <img src={pikachu} />
                    <button>Adicionar a Pokedéx</button>
                    <button onClick={() => goToDetails(history)}>Ver detalhes</button>
                </PokemonBox>
                <PokemonBox>
                    <img src={pikachu} />
                    <button>Adicionar a Pokedéx</button>
                    <button onClick={() => goToDetails(history)}>Ver detalhes</button>
                </PokemonBox>
                <PokemonBox>
                    <img src={pikachu} />
                    <button>Adicionar a Pokedéx</button>
                    <button onClick={() => goToDetails(history)}>Ver detalhes</button>
                </PokemonBox>
            </GridPokemon>
        </div>
    )
}

export default Home