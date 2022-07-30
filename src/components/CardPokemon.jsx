import React from 'react';
import { useState } from 'react';
import { PokemonInfo } from './PokemonInfo';
import { Types } from './Types';
import { PokemonPowers } from './PokemonPowers';
import '../styles/CardPokemon.css'

export const CardPokemon = ({pokemons}) => {
  const[powersControl, setPowersControl] = useState(false); //Control del botón de powers
  const {types, sprites, id, name, stats} = pokemons;
  //Cambio de estado del botón tabla de poderes
  const handlePowersControl = ()=>{
    setPowersControl(!powersControl)
  }
  return (
    <section className='CardPokemon shadow container1'>
      <div className='card_pokemon_container paddinBox'>
        <div className="screen_container">
          {
            pokemons?.name &&
            <PokemonInfo 
              sprites = {sprites}
              id = {id}
              name = {name}
              types = {types}
            />
          }
          <div className="pokemon_types">
            <h2>Types</h2>
            { types?.length && 
              <Types types = {types}/>
            }            
            <button className='btn_powers shadow' onClick={handlePowersControl}>
              <p>▼</p>              
            </button>
          </div>          
        </div>
        {
          powersControl &&
          <PokemonPowers 
            id = {pokemons.id}
            stats = {stats}
          />
        }
      </div>
    </section>
  )
}
