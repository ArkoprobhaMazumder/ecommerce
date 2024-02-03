import React from 'react'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
  return (
    <section className='error-section'>
      <div className="error-container">
        <h1>404</h1>
        <h3>UH OH! You're Lost.</h3>
        <p>The page you are looking is not avilable. How You got here is a mystry But you can tap to the button below to go to Home Page </p>
        <NavLink to="/">
          <button>Home</button>
        </NavLink>
      </div>
    </section>
  )
}

export default Errorpage
