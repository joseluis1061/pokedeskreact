import React from 'react';
import '../styles/PokemonInfo.css'

export const PokemonInfo = () => {
  return (
    <section className="pokemon_info">
      <h2>Pikachu</h2>
      <figure className='pokemon_image'>
        <img src="../src/assets/image/pikachu2.png" alt="Pokemon Name" />
      </figure>
      <p className='pokemon_number'>N° 001</p>  
    </section>
  )
}
