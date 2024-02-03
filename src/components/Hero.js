import React from 'react';
import "./hero.css";
import Button from '../style/Button';
import "../style/button.css"
import { NavLink } from 'react-router-dom';
const Hero = ({data}) => {
  const {name}=data;
  return (
    <main className='hero-section'>
      <div className="hero-container">
        <div className="info-container">
          <p className='welcome-text'>Welcome to</p>
          <h1>{name}</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis odio illo error voluptatum explicabo. Quos accusantium nobis debitis sunt ipsum, ducimus doloribus quaerat animi est, et quasi nam, aliquid alias. Architecto recusandae id soluta dicta eius, at similique ullam vel?</p>
          <NavLink to="/products" className="info-container-link">
            <Button/>
          </NavLink>
        </div>
        <div className="image-container">
          <img src="./images/hero.jpg" alt="Hero img" />
        </div>
      </div>
    </main>
  )
}

export default Hero;


//second day work finish here
//we have to
