import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Mealcard from '../components/Mealcard'

const Meal = () => {
  useEffect(() => {
    getMealData();
  }, [])

  const [meal, setMeal] = useState([])

  const { pathname } = window.location;
  const paths = pathname.split("/").filter(entry => entry !== "");
  const lastPath = paths[paths.length - 1];

  const getMealData = async () => {
    const { data } = await axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${lastPath}`);
    setMeal(data.meals[0])
    console.log(data)
  }

  const videoSrc = meal.strYoutube
  let procesedVideoSrc = ''
  if(videoSrc){
      const videoSrcArray = videoSrc.split('/')

        const fPart = videoSrcArray[0]
        const sPart = videoSrcArray[2]
        const tPart = videoSrcArray[3].split('=')

        procesedVideoSrc = fPart + '/' + sPart + '/embed/' + tPart[1] 
    }

  return (
    <>
    <div className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-1/2 h-40 object-cover object-center rounded" src={meal.strMealThumb}/>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <div className="flex flex-wrap justify-starts items-center mt-4">
            <div className="text-xs mr-2 py-1.5 px-4 text-red-500 border-red-500 border-2 rounded-2xl">
                {"#" + meal.strArea}
            </div>
            <div className="text-xs mr-2 py-1.5 px-4 text-red-500 border-red-500 border-2 rounded-2xl">
                {"#" + meal.strCategory}
            </div>
          </div>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{meal.strMeal}</h1>
            <p className="leading-relaxed lg:mt-10">{meal.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
        <h2 className='text-red-600 text-2xl sm:text-4xl font-semibold mb-10 text-center mt-10'>Video Instructions</h2>
        <div className='flex items-center justify-center h-[300px] sm:h-[500px]'>
            <iframe src={procesedVideoSrc} frameBorder='0' className='lg:w-1/2  h-[300px] sm:h-[500px]'></iframe>
        </div>
    </>
  )
}

export default Meal