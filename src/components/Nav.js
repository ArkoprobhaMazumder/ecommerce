import React from 'react';
import "./nav.css";
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from '../context/Cart_Context';
const Nav = () => {

  let {total_item}=useCartContext();

  return (
    <nav className='navbar'>
      <ul className='navbar-lists'>
          <li className='list-item'>
          <NavLink to="/" className="navbar-link home-link">Home</NavLink>
          </li>
          <li className='list-item'>
          <NavLink to="/about" className="navbar-link">About</NavLink>
          </li>
          <li className='list-item'>
          <NavLink to="/products" className="navbar-link">Products</NavLink>
          </li>
          <li className='list-item'>
          <NavLink to="/contact" className="navbar-link">Contact</NavLink>
          </li>
          <li className='list-item'>
          <NavLink to="/cart" className="cart-trolley">
          <FiShoppingCart className='trolley'/>
          <span className='trolley-total-item'>{total_item}</span>
          </NavLink>
          </li>
      </ul>

    </nav>
  )
}

export default Nav
