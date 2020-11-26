import React, { useEffect, useState } from "react"
import styled from 'styled-components'
import axios from 'axios'
import { DivButton, GridPokemon, H1Home, Header, PokemonBox, HeaderDetails, DetailButtons, DetailsContainer, DetailsPictures, StyledPic } from "../styled/styles"
import { useHistory, useParams } from "react-router-dom"
import {goToPokedex, goBack} from '../router/coordinations'
import pikachu from '../components/img/pikachu.png'

function Details () {

    const history = useHistory()
    const pathParams= useParams();
    const pokeName= pathParams.name
    const [pokeFront, setPokeFront] = useState([])
    const [pokeBack, setPokeBack] = useState([])
    const [pokeStats, setPokeStats] = useState([])
    const [pokeAttack, setPokeAttack] = useState([])

    let hp = {}
    let attack = {}
    let defense = {}
    let specialAttack = {}
    let specialDefense = {}
    let speed = {}

    const getDetails = () =>{
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)

        .then((res)=>{
        setPokeFront(res.data.sprites.front_default)
        setPokeBack(res.data.sprites.back_default)
        setPokeStats(res.data.stats)
        setPokeAttack(res.data.moves)
        })

        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getDetails()
    }, [])

    for (let index = 0; index < pokeStats.length; index++) {
        hp = pokeStats[0]
        attack = pokeStats[1]
        defense = pokeStats[2]
        specialAttack = pokeStats[3]
        specialDefense = pokeStats[4]
        speed = pokeStats[5]

    }

    const attackList = pokeAttack.filter((move, index) =>{
        if (index < 5) {
            return true
        } else{
            return false
        }
    })  

    return (
        <div>
            <HeaderDetails>

                <DetailButtons onClick={() => goToPokedex(history)}>Ir para Pokedéx</DetailButtons>


                <h1>{pokeName}</h1>

                <DetailButtons onClick={() => goBack(history)}>Voltar para Home</DetailButtons>
            </HeaderDetails>

            <DetailsContainer>
            <div>
                <DetailsPictures>
                <StyledPic src={pokeFront} />
                <img src={pokeBack} />
                </DetailsPictures>
                <h2>Poderes</h2>
                <p>HP: {hp.base_stat}</p>
                <p>Ataque: {attack.base_stat}</p>
                <p>Ataque Especial: {specialAttack.base_stat}</p>
                <p>Defesa Especial: {specialDefense.base_stat}</p>
                <p>Velocidade: {speed.base_stat}</p>

                <h2>Principais Ataques</h2>

                {attackList.map((move)=>{
                    return <p>{move.move.name}</p>
                })}
            </div>
            </DetailsContainer>
            

        </div>
     )
}

export default Details