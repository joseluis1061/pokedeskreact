import { useState, useEffect } from 'react';
import {LedButtons} from './components/LedButtons';
import {CardPokemon} from './components/CardPokemon';
import {ControlNav} from './components/ControlNav';
import useGetApi from './hooks/useGetApi';

function App() {
  const[idPokemon, setIdPokemon] = useState(1);
  useEffect(()=>{
    const min = 1;
    const max = 898;
    const idRandom = Math.floor(Math.random() * (max - min) + min);
    setIdPokemon(idRandom);
  }, []);
  const pokemons = useGetApi(idPokemon);
  return (
    <div className="App">
      <LedButtons />
      <CardPokemon pokemons = {pokemons}/> 
      <ControlNav 
        idPokemon = {idPokemon}
        setIdPokemon = {setIdPokemon}
      />
    </div>
  )
}
export default App;