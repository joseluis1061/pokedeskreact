import { useState } from 'react';
import {LedButtons} from './components/LedButtons';
import {CardPokemon} from './components/CardPokemon';
import {ControlNav} from './components/ControlNav';

function App() {
  return (
    <div className="App">
      <LedButtons />
      <CardPokemon /> 
      <ControlNav />
    </div>
  )
}

export default App
