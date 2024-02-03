import React from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css";
import Nav from './Nav';

const Header = () => {
  return (
    <header  className='header'>
      <NavLink to='/'>
        <img className='image' src="./images/logo.png" alt="dev logo" />
      </NavLink>
      <Nav/>
    </header>
  )
}

export default Header

// header section consist with hero img as navlink and Nav component