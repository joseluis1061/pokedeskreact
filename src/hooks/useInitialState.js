import { useState } from "react";

const initialState = {
  pokemon:[]
};

const useInitialState = () =>{
  const [state, setState] = useState(initialState);

  const addToPokemon = (payload)=>{
    setState({
      ...state,
      pokemon:[payload]
      //pokemon:[...state.pokemon, payload]
    });
  };

  const removeToPokemon = (payload)=>{
    setState({
      ...state,
      pokemon:state.pokemon.filter(items => items.id !==payload.id)
    });
  };


  return {
    state, 
    addToPokemon,
    removeToPokemon
  }
}

export default useInitialState;