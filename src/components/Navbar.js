import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import Logo from '../assets/logo.png'

const Navbar = () => {

  return (
    <div id='navbar' className="flex flex-row items-center justify-start ml-2">
      <Link to='/'>
        <img src={Logo} alt="logo" className='w-24 sm:w-36'/>
      </Link>
    <div className='text-2xl font-semibold text-red-600 ml-2'>
      <NavLink to="/" className={({ isActive }) => isActive ? 'm-4 border-b-2 border-gray-300' : 'm-4'}>Home</NavLink>

      <NavLink  to="/About" className={({ isActive }) => isActive ? 'm-4 border-b-2 border-gray-300' : 'm-4'}>About</NavLink>
    </div>
    </div>
  )
}

export default Navbar