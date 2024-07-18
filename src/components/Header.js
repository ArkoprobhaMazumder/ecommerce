import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css";
import Nav from './Nav';

const Header = () => {
  const [data, setData] = useState(false);
  let head = document.querySelector("header");
  window.addEventListener('scroll', () => {
    window.scrollY >= 100 ? head.classList.add("scroll_down") : head.classList.remove("scroll_down");
    
    setData(head.classList.contains('scroll_down'))
  })
  console.log(data);
  return (
    <header className="header">
      <NavLink to='/'>
        <img className='image' src="./images/logo.png" alt="dev logo" />
      </NavLink>
      <Nav value={data} />
    </header>
  )
}

export default Header

// header section consist with hero img as navlink and Nav component