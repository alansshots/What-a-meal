import React from 'react'
import { Link } from 'react-router-dom';

const Mealcard = ({meal}) => {
  return (
        <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-5">
            <Link to={`/Meal/${meal.idMeal}`} className="w-full block h-full">
                <img alt="meal photo" src={meal.strMealThumb} className="max-h-40 w-full object-cover"/>
                <div className="bg-white w-full p-2">
                    <div className="flex flex-wrap justify-starts items-center mt-4">
                        <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                            {"#" + meal.strArea}
                        </div>
                        <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                            {"#" + meal.strCategory}
                        </div>
                    </div>

                    <p className="text-gray-800 text-xl font-medium mb-2">
                        {meal.strMeal}
                    </p>
                </div>
            </Link>
        </div>
  )
}

export default Mealcard