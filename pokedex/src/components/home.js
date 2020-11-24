import React, { useEffect, useState } from "react"
import styled from 'styled-components'
import axios from 'axios'
import { DivButton, GridPokemon, H1Home, Header, PokemonBox } from "../styled/styles"
import { useHistory } from "react-router-dom"
import { goToPokedex, goToDetails } from '../router/coordinations'
import pikachu from "../components/img/pikachu.png"
import { useRequestData } from "../hooks/useRequestData"

function Home(props) {

    const history = useHistory()

    const [pokedexList, setPokedexList] = useState([])

    const pokeImage = useRequestData ("https://pokeapi.co/api/v2/pokemon/?limit=20", undefined)

    const getPokeList = () => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon/?limit=20")

            .then((res) => {

                setPokedexList(res.data.results)
                console.log(res.data)

            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    useEffect(() => {
        getPokeList()
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
                        {pokedexList.map((pokemons) => (
                        <PokemonBox key={pokemons.id}>
                         <p> {pokemons.name}</p>
                         <img src={pokeImage}/>
                         <button>Adicionar a Pokedéx</button>
                         <button onClick={() => goToDetails(history)}>Ver detalhes</button>
                         </PokemonBox>
        
      ))}
                        </GridPokemon>
                        
    


            
        </div>
    )
}

export default Home