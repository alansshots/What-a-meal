import React from 'react'
import { Link } from 'react-router-dom';

import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="p-4 md:px-6 md:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                <a className="flex items-center justify-center mb-4 sm:mb-0">
                    <img src={Logo} className="mr-3 w-24" alt="What A Meal Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-red-700">What A Meal!</span>
                </a>

                <span className="block text-sm text-gray-500 text-center mb-5 mt-5">© 2022 <a href="https://github.com/alansshots" className="underline" target='_blanck'>Alen Gospodinov</a>. All Rights Reserved.
                </span>

                <ul className="flex flex-wrap items-center justify-center mb-6 text-sm text-gray-500 sm:mb-0">
                    <li>
                        <Link to='/' className="hover:text-red-600 text-xl mr-5">Home</Link>
                    </li>
                    <li>
                        <Link to='/About' className="hover:text-red-600 text-xl ">About</Link>
                    </li>
                </ul>
            </div>
    </footer>
  )
}

export default Footer