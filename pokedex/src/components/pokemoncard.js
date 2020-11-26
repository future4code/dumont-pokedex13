import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import {PokemonBox} from '../styled/styles'
import axios from 'axios'

function PokeCard(props) {

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

    const goToDetails = (name) =>{
        history.push (`/pokemon-details/${name}`);
    }

    return (
        <PokemonBox>
            <img src={pokeImage} />
            <p>{props.name}</p>
            <button>Adicionar a Pokedéx</button>
            <button onClick={() => goToDetails(props.name)}>Ver detalhes</button>
        </PokemonBox>
    )
}

export default PokeCard