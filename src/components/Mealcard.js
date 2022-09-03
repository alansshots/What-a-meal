import React from 'react'
import { Link } from 'react-router-dom';
import { motion} from 'framer-motion'

const Mealcard = ({meal}) => {
  return (
        <motion.div
        whileHover={{scale: 1.05}}
        whileTap = {{scale: 0.95}}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
        default: {
          duration: 0.1,
          ease: [0, 0.71, 0.2, 1.01]
        },
        scale: {
          type: "spring",
          damping: 15,
        //   stiffness: 10,
        //   restDelta: 0.001
        }
      }}

        className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-5">
            <Link to={`/Meal/${meal.idMeal}`} className="w-full block h-full">
                <img alt="meal photo" src={meal.strMealThumb} className="max-h-90 w-full object-cover"/>
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
        </motion.div>
  )
}

export default Mealcard