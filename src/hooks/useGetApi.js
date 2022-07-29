import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';

const API = 'https://pokeapi.co/api/v2/pokemon/';
const useGetApi = (id) => {
  const [pokemons, setPokemons] = useState([]);  

  useEffect(()=>{
    if(id){
      const getProducts = async () =>{
        const response = await axios(`${API}${id}`);
        setPokemons(response.data);
      };  
      getProducts()
    }
  },[id])

  return pokemons;
}
export default useGetApi;