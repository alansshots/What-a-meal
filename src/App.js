import React from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.css'

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';


function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
