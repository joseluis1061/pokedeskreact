import React from 'react'
import '../styles/LedButtons.css';
export const LedButtons = ({setIdPokemon}) => {
  const handleClikRandom = () =>{
    const min = 1;
    const max = 898;
    const idRandom = Math.floor(Math.random() * (max - min) + min);
    setIdPokemon(idRandom);
  };
  return (
    <header className='header container1'>
      <div className="header_container">
        <figure 
          className='pokeball_container'
          onClick={handleClikRandom}
        >
          <img src="../src/assets/image/pokeball.png" alt="Pokebal Button" />
        </figure>

        <div className='leds_containers'>
          <div className='led led_green'></div>
          <div className='led led_blue'></div>
          <div className='led led_yellow'></div>
        </div>
      </div>
    </header>
  )
}
