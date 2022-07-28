import React from 'react';
import { useState, useEffect } from 'react';
import useGetApi from '../hooks/useGetApi';
import { PokemonInfo } from './PokemonInfo';
import { Types } from './Types';
import { PokemonPowers } from './PokemonPowers';
import '../styles/CardPokemon.css'

export const CardPokemon = () => {
  const[powersControl, setPowersControl] = useState(false);
  const[idPokemon, setIdPokemon] = useState(null);

  useEffect(()=>{
    const min = 1;
    const max = 898;
    const idRandom = Math.floor(Math.random() * (max - min) + min);
    setIdPokemon(idRandom);
  }, []);

  const pokemon = useGetApi(idPokemon);
  const {types, sprites, id, name, stats} = pokemon;

  const handlePowersControl = ()=>{
    setPowersControl(!powersControl)
  }
  return (
    <section className='CardPokemon shadow '>
      <div className='card_pokemon_container paddinBox'>

        <div className="screen_container">
          {
            types &&
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
          stats.map(element => {
            return <PokemonPowers 
              key = {`${name_}_${pokemon.id}`}              
              base_stat = {element.base_stat}
              name = {element.stat.name}
            />

          })
        }     

      </div>
    </section>
  )
}
