import React from 'react'
import { Link } from 'react-router-dom';

import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div id='navbar' className="flex flex-row items-center justify-start ml-2">
      <Link to='/'>
        <img src={Logo} alt="logo" className='w-24 sm:w-36'/>
      </Link>
    <div className='text-2xl font-semibold text-red-600 ml-2'>
      <Link to='/' className='m-4 border-b-2 border-gray-300'>Home</Link>
      <Link to='/About' className='m-4'>About</Link>
    </div>
    </div>
  )
}

export default Navbar