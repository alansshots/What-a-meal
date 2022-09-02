import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { MdSearch } from "react-icons/md";

import Mealcard from './Mealcard'

const Search = () => {
  const [search, setSearch] = useState('')
  const [meals, setMeals] = useState([])


  useEffect(() => {
    handleSearch()
  }, [])

    const handleRandomSearch = async () => {
    //   const { data } = await axios('https://www.themealdb.com/api/json/v1/1/random.php');
      const { data } = await axios('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
      setMeals(data.meals)
      console.log(meals)
    }

    const handleSearch = async () => {
      const { data } = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      setMeals(data.meals)
      console.log(meals)
    }  

  return (
    <>
    <div id='search' className='w-1/2 m-auto mt-10 flex '>
        <form className='w-full' >   
            <label htmlFor="search" className="mb-2 font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 text-2xl">
                <MdSearch/>
                </div>
                <input type="text" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="Search whatever your belly is craving for..." onChange={(e)=> setSearch(e.target.value)} />
                <button type="button" className="text-white absolute right-2.5 bottom-2.5 bg-red-600 hover:bg-red-700  font-medium rounded-lg text-sm px-4 py-2" onClick={handleSearch}>Search</button>
            </div>
        </form>
        <button className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-7 py-1 ml-5" 
        onClick={handleRandomSearch}>Surprise me!</button>
    </div>
        {/* <div className='flex flex-row items-center justify-center '>
            <div className='m-4'>
            <label for="underline_select" class="sr-only">Underline select</label>
            <select  class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                <option selected>Choose a region</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
            </div>  
            <div className='m-4'>
            <label for="underline_select" class="sr-only">Underline select</label>
            <select  class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                <option selected>Choose a region</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
            </div>

            <div className='m-4'>
            <label for="underline_select" class="sr-only">Underline select</label>
            <select  class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                <option selected>Choose a region</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
            </div>
        </div>  */}

        <div id='results' className='flex flex-col items-center justify-center mt-10'>
            <h2 className='text-red-600 text-4xl font-semibold mb-10'>Results</h2>
            <div className='flex flex-row flex-wrap items-center justify-center'> 
            {meals.map((meal) => (
                <Mealcard meal={meal} key={meal.idMeal}/>
            ))}
            </div>
        </div>
        </>
  )
}

export default Search