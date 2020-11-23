import React from "react"
import styled from 'styled-components'
import axios from 'axios'
import { DivButton, GridPokemon, H1Home, Header, PokemonBox, HeaderDetails, DetailButtons, DetailsContainer, DetailsPictures, StyledPic } from "../styled/styles"
import { useHistory } from "react-router-dom"
import {goToPokedex, goBack} from '../router/coordinations'
import pikachu from '../components/img/pikachu.png'

function Details() {

    const history = useHistory()

    return (


        <div>

            <HeaderDetails>

                <DetailButtons onClick={() => goToPokedex(history)}>Ir para Pokedéx</DetailButtons>


                <h1>Lista de Pokémons</h1>

                <DetailButtons onClick={() => goBack(history)}>Voltar para Home</DetailButtons>
            </HeaderDetails>

            <DetailsContainer>
            <div>
                <DetailsPictures>
                <StyledPic src={pikachu} />
                <img src={pikachu} />
                </DetailsPictures>
                <div>Poderes</div>
                <div>Principais Ataques</div>
            </div>
            </DetailsContainer>
        </div>
    )
}

export default Details