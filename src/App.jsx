import { useState, useEffect } from 'react';
import {LedButtons} from './components/LedButtons';
import {CardPokemon} from './components/CardPokemon';
import {ControlNav} from './components/ControlNav';
import useGetApi from './hooks/useGetApi';

function App() {
  const[idPokemon, setIdPokemon] = useState(1);

  const pokemons = useGetApi(idPokemon);
  return (
    <div className="App">
      <LedButtons 
        setIdPokemon = {setIdPokemon}
        
      />
      <CardPokemon pokemons = {pokemons}/> 
      <ControlNav 
        idPokemon = {idPokemon}
        setIdPokemon = {setIdPokemon}
      />
    </div>
  )
}
export default App;