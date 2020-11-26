import React, { useEffect, useState, useContext } from 'react'
import {useHistory} from 'react-router-dom'
import {PokemonBox} from '../styled/styles'
import axios from 'axios'
import GlobalStateContext from '../globalstate/globalstatecontext'

function PokeCard(props) {

    const {buttonPokedex, setButtonPokedex, pokemon, setPokemon, pokeList, setPokeList, getPokemons, pokedex, setPokedex, pokeDetails, setPokeDetails } = useContext(GlobalStateContext);
    const history = useHistory()

    const [pokeImage, setPokeImage] = useState([])

    useEffect(()=>{
        getPokeImage()
    }, [])

    const getPokeImage = () =>{
        axios
        .get(props.url)

        .then((res)=>{
            setPokeImage(res.data.sprites.front_default)
        })
        
        .catch((err)=>{
            console.log(err)
        })
    }

    const addPokedex = (name, url) => {
        const newPokemon = {name, url}
        const newPokedex = [...pokedex, newPokemon]
        setPokedex(newPokedex)
        alert("Pokemon adicionado com sucesso!")
        const ListPokemon = pokemon.filter((pokemon) => {
          if (pokemon.name !== name) {
            return true
          }
            return false
          })
        setPokemon(ListPokemon)
      }

    

    const goToDetails = (name) =>{
        history.push (`/pokemon-details/${name}`);
    }

    return (
        <PokemonBox>

            
            <img src={pokeImage} />
            <p>{props.name}</p>
            <button onClick={() => addPokedex(props.name, props.url)}>{buttonPokedex}</button>
            <button onClick={() => goToDetails(props.name)}>Ver detalhes</button>
        </PokemonBox>
    )
}

export default PokeCard