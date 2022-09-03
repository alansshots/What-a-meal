import React from 'react'
import { motion} from 'framer-motion'

import BannerImage from '../assets/banner-img.jpg'

const Banner = () => {
  return (
    <div id='banner' className='flex flex-col sm:flex-row items-center justify-around mb-10'>
        <div className='flex flex-col items-start justify-between ml-5 '>
            <h2 className='text-red-600 text-4xl lg:text-6xl font-semibold'>Eat, Sleep <br/>And Repeat.</h2>
            <p className='mt-2 mb-2'>Explore the diversity of food every region has to offer!</p>
            <motion.a href="#search"
            whileHover={{scale: 1.05}}
            whileTap={{ scale: 0.8 }} 
            className='mt-10 p-1 w-1/2 text-xl text-center bg-red-600 hover:bg-red-700 text-white rounded-md'>
            Explore</motion.a> 
            {/* <h2 className='text-[120px] opacity-10  z-10'>Delicious food</h2> */}
        </div>  
        <img src={BannerImage} alt="banner" className='lg:h-[800px] h-[550px] md:block hidden mt-[-200px] rounded-3xl'/>
        <img src={BannerImage} alt="banner" className='w-full h-3/4 mt-5 sm:hidden'/>
    </div>
  )
}

export default Banner