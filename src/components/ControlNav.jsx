import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/ControlNav.css';

export const ControlNav = ({idPokemon, setIdPokemon}) => {
  const handleSearchString = (value)=>{
    setIdPokemon(value);       
  }

  const handleSearchNumberBack = ()=>{
    if(idPokemon >1){
      const newId = idPokemon -1;
      setIdPokemon(newId)
    }else{
      setIdPokemon(898);
    }
  }

  const handleSearchNumberNext = ()=>{
    if(idPokemon <898){
      const newId = idPokemon +1;
      setIdPokemon(newId)
    }else{
      setIdPokemon(1);
    }
  }
  return (
    <section className='control_nav paddinBox container1'>
      <div className="control_nav_container">
        <input 
          type="text" 
          className="search"
          placeholder="Search by name or number"
          onChange={(e)=>{            
            handleSearchString(e.target.value)}
          }
        />  
        <button 
          className='btn btn_back shadow'
          onClick={handleSearchNumberBack}
        >
          Back
        </button>
        <button 
          className='btn btn_next shadow'
          onClick={handleSearchNumberNext}
        >
          Next
        </button>          
        <img className="logo" src="../../src/assets/image/logo.webp" alt="Logo Pokemon" />
      </div>
    </section>
  )
}
