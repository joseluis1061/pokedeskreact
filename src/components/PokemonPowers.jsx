import React from 'react';
import '../styles/PokemonPowers.css';

export const PokemonPowers = ({base_stat, name}) => {
  return (
    <article className="pokemon_power">
      <li className="power_item">
        <p className="power"> {name}:</p> 
        <p className='value'>{base_stat}</p>
      </li>   
    </article>
  )
}
