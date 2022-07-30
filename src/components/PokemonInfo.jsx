import React from 'react';
import '../styles/PokemonInfo.css'

export const PokemonInfo = ({sprites, id, name, types}) => {
  return (
    <section className="pokemon_info">
      <h2>{name.toUpperCase()}</h2>
      <figure className={`pokemon_image color_${types[0].type.name}`}>
        <img src={sprites?.other['official-artwork'].front_default} alt="Pokemon Name" />
      </figure>
      <p className='pokemon_number'>N° {id}</p>  
    </section>
  )
}
