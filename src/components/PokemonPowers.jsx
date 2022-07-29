import React from 'react';
import '../styles/PokemonPowers.css';

export const PokemonPowers = ({id, stats}) => {
  return (
    <article className="pokemon_power">
      {
        stats.map((element)=>{
          return <li className="power_item" key = {`${element.stat.name}_${id}`}  >
            <p className="power"> {element.stat.name}:</p> 
            <p className='value'>{element.base_stat}</p>
          </li>  
        })
      }
    </article>
  )
}
