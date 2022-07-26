import React from 'react';
import '../styles/PokemonInfo.css'

export const PokemonInfo = ({sprites, id, name}) => {
  return (
    <section className="pokemon_info">
      <h2>{name}</h2>
      <figure className='pokemon_image'>
        <img src={sprites?.front_shiny} alt="Pokemon Name" />
      </figure>
      <p className='pokemon_number'>N° {id}</p>  
    </section>
  )
}
