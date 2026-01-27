import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className='nav'>
        <h3>Navbar</h3>

        <div className='contain'>
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/about'>About</Link>
          <Link to='/product'>Product</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar