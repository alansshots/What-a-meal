import React from 'react'
import { Link } from 'react-router-dom';

import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="px-3 py-8 bg-white text-2 text-gray-500 transition-colors duration-200">
    <div className="flex flex-col">
        <div className="md:hidden mt-7 mx-auto w-11 h-px rounded-full">
        </div>
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row">
            <nav className="flex-1 flex flex-col items-center justify-center md:items-end md:border-r border-gray-100 md:pr-5">
                <Link to='/' className="hover:text-red-600">Home</Link>
                <Link to='/About' className="hover:text-red-600">About</Link>
            </nav>
            <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full">
            </div>
            <div className="mt-4 md:mt-0 flex-1 flex items-center justify-center md:border-r border-gray-100">
                <img src={Logo} alt="logo" className='w-24'/>
                <h4 className='text-red-600 font-semibold text-xl'>What A Meal!</h4>
            </div>
            <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full ">
            </div>
            <div className="mt-7 md:mt-0 flex-1 flex flex-col items-center justify-center md:items-start md:pl-5">
                <span className="">
                    © 2022
                </span>
                <span className="mt-7 md:mt-1">
                    Created by 
                    <a className="underline hover:text-primary-gray-20 ml-1" href="https://github.com/alansshots">
                        Alen Gospodinov
                    </a>
                </span>
            </div>
        </div>
    </div>
</footer>

  )
}

export default Footer