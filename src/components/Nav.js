import React from 'react';
import "./nav.css";
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from '../context/Cart_Context';
const Nav = ({value}) => {
  let {total_item}=useCartContext();

  return (
    <nav className='cust_navbar'>
      <ul className='navbar-lists'>
          <li className='list-item'>
          <NavLink to="/" className={value?`navbar-link navbar_link_cust_color`:`navbar-link`}>Home</NavLink>
          </li>
          <li className='list-item'>
          <NavLink to="/about" className={value?`navbar-link navbar_link_cust_color`:`navbar-link`}>About</NavLink>
          </li>
          <li className='list-item'>
          <NavLink to="/products" className={value?`navbar-link navbar_link_cust_color`:`navbar-link`}>Products</NavLink>
          </li>
          <li className='list-item'>
          <NavLink to="/contact"  className={value?`navbar-link navbar_link_cust_color`:`navbar-link`}>Contact</NavLink>
          </li>
          <li className='list-item'>
          <NavLink to="/cart" className="cart-trolley">
          <FiShoppingCart  className={value?`trolley navbar-link navbar_link_cust_color`:`navbar-link trolley`}/>
          <span className='trolley-total-item'>{total_item}</span>
          </NavLink>
          </li>
      </ul>

    </nav>
  )
}

export default Nav
