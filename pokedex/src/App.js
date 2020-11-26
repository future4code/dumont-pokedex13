import React, { useState } from 'react'
import GlobalStateContext from './globalstate/globalstatecontext'
import axios from 'axios'
import Router from './router/router'

const App = () => {

  const [pokemon, setPokemon] = useState([])
  const [pokedex, setPokedex] = useState([])
  const [pokeList, setPokeList] = useState([])
  const [pokeDetails, setPokeDetails] = useState([])
  const [buttonPokedex, setButtonPokedex] = useState("ADICIONAR À POKEDEX")

  const getPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")

      .then((res) => {
        setPokemon(res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const data = {buttonPokedex, setButtonPokedex, pokemon, setPokemon, pokeList, setPokeList, getPokemons, pokedex, setPokedex, pokeDetails, setPokeDetails }

  
  return (
    
    <GlobalStateContext.Provider value={data}>
  
      <Router />

    </GlobalStateContext.Provider>
  );
};


export default App;

