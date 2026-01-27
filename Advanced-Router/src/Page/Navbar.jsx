import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
            <div className='bg-black p-5 flex justify-between px-5 py-5'>
            <h1 className="text-3xl font-bold underline text-red-500"> Logo </h1>
            
            <div className='text-white flex items-center gap-5 px-10 '>

                <Link to='/' className='hover:text-red-400 text-medium active:scale-95'>Home</Link>
                <Link to='/about'  className='hover:text-red-400 text-medium active:scale-95'>About</Link>
                <Link to='/contact'  className='hover:text-red-400 text-medium active:scale-95'>Contact</Link>
                <Link to='/product'  className='hover:text-red-400 text-medium active:scale-95'>Product</Link>

            </div>
            </div>
    </div>
  )
}

export default Navbar