import React from 'react';
import { useState } from 'react';
import { PokemonInfo } from './PokemonInfo';
import '../styles/CardPokemon.css'

export const CardPokemon = () => {
  const[powersControl, setPowersControl] = useState(false);

  const handlePowersControl = ()=>{
    setPowersControl(!powersControl)
  }
  return (
    <section className='CardPokemon shadow '>
      <div className='card_pokemon_container paddinBox'>

        <div className="screen_container">
          <PokemonInfo/>

          <div className="pokemon_types">
            <h2>Types</h2>
            <p className="type type1 shadow">Rock</p>
            <p className="type type2 shadow">Electric</p>
            <button className='btn_powers shadow' onClick={handlePowersControl}>
              <p>▼</p>              
            </button>
          </div>          
        </div>

        {
          powersControl &&
          <article className="pokemon_power">
            <li className="power_item">
              <p className="power"> HP:</p> 
              <p className='value hp'>20</p>
            </li>
            <li className="power_item">
              <p className="power"> Attack: </p> 
              <p className='value attack'>120</p>
            </li>
            <li className="power_item">
              <p className="power"> Defense: </p>
              <p className='value defense'>130</p>
            </li>
            <li className="power_item">
              <p className="power"> Special Attack:</p> 
              <p className='value special_attack'>55</p>
            </li>
            <li className="power_item">
              <p className="power"> Special Defense:</p> 
              <p className='value special_defense'>45</p>
            </li>
            <li className="power_item">
              <p className="power"> Speed:</p> 
              <p className='value speed'>90</p>
            </li>
          </article>
        }
        

      </div>
    </section>
  )
}
