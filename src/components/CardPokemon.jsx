import React from 'react';
import { useState, useEffect } from 'react';
import useGetApi from '../hooks/useGetApi';
import { PokemonInfo } from './PokemonInfo';
import { Types } from './Types';
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
  const {types, sprites, id, name} = pokemon;
  console.log(types?.length)

  const handlePowersControl = ()=>{
    setPowersControl(!powersControl)
  }
  return (
    <section className='CardPokemon shadow '>
      <div className='card_pokemon_container paddinBox'>

        <div className="screen_container">
          {
            idPokemon &&
            <PokemonInfo 
              sprites = {sprites}
              id = {id}
              name = {name}
            />
          }

          <div className="pokemon_types">
            <h2>Types</h2>
            {/* <p className="type type1 shadow">Rock</p>
            <p className="type type2 shadow">Electric</p> */}
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
