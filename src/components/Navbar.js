import React from 'react'
import {Route, Routes} from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';

const Navbar = () => {
  return (
    <div id='navbar' className=''>
        <img src="." alt="logo" />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>}>About</Route>
        </Routes>
    </div>
  )
}

export default Navbar