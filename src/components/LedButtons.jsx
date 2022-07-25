import React from 'react'
import '../styles/LedButtons.css';
export const LedButtons = () => {
  return (
    <header className='header'>
      <div className="header_container">
        <figure className='pokeball_container'>
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
