import React from 'react';
import '../styles/ControlNav.css';

export const ControlNav = () => {
  return (
    <section className='control_nav paddinBox'>
      <div className="control_nav_container">
        <input type="text" className='search'/>  
        <button className='btn btn_back shadow'>
          Back
        </button>
        <button className='btn btn_next shadow'>
          Next
        </button>          
        <img className="logo" src="../src/assets/image/logo.webp" alt="Logo Pokemon" />
      </div>
    </section>
  )
}
