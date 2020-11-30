import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../components/BaseUrl";
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {
 const [pokemonList,setPokemonList]=useState([]);
 const [pokedex,setPokedex]=useState([]);

  const getPokemons = () => {
    axios
      .get(`${baseUrl}`)
      .then((response) => {
        setPokemonList(response.data.results);
      })
      .catch((error) => alert(error.message));
  };

  const states = {pokemonList,pokedex };
  const setters = { setPokemonList, setPokedex };
  const requests = { getPokemons };

  const data = { states, setters, requests };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
