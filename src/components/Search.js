import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { MdSearch } from "react-icons/md";

import Mealcard from './Mealcard'

const Search = () => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [meals, setMeals] = useState([])


  useEffect(() => {
    handleSearch()
  }, [])

    const handleRandomSearch = async () => {
      const { data } = await axios('https://www.themealdb.com/api/json/v1/1/random.php');
      setMeals(data.meals)
      console.log(meals)
    }

    const handleSearch = async () => {
      const { data } = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      setMeals(data.meals)
      console.log(meals)
    }  

    const handleSearchByCategory = async (category) => {
        const { data } = await axios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        setMeals(data.meals)
        console.log(meals)
      }  

  return (
    <>
    <div id='search' className='w-full lg:w-1/2 lg:m-auto mt-10 flex-col items-center justify-center mr-10'>
        <div className='w-full m-5'>   
            <label htmlFor="search" className="mb-2 font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 text-2xl">
                <MdSearch/>
                </div>
                <input type="text" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="Search..." onChange={(e)=> setSearch(e.target.value)} />
                <button type="button" className="text-white absolute right-2.5 bottom-2.5 bg-red-600 hover:bg-red-700  font-medium rounded-lg text-sm px-4 py-2" onClick={handleSearch}>Search</button>
            </div>
        </div>
        <div className='flex flex-row items-center justify-center'>
        <button className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-7 py-1 ml-5" 
        onClick={() => { setCategory('Beef'); handleSearchByCategory('Beef')}}>Beef</button>
        <button className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-7 py-1 ml-5" 
        onClick={() => { setCategory('Beakfast'); handleSearchByCategory('Beakfast')}}>Breakfast</button>
        <button className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-7 py-1 ml-5" 
        onClick={() => { setSearch('Chicken'); handleSearchByCategory('Chicken')}}>Chicken</button>
        <button className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-7 py-1 ml-5" 
        onClick={() => { setSearch('Dessert'); handleSearchByCategory('Dessert')}}>Dessert</button>
        <button className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-7 py-1 ml-5" 
        onClick={() => { setSearch('Pasta'); handleSearchByCategory('Pasta')}}>Pasta</button>
        <button className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-7 py-1 ml-5" 
        onClick={() => { setSearch('Seafood'); handleSearchByCategory('Seafood')}}>Seafood</button>
        <button className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-7 py-1 ml-5" 
        onClick={handleRandomSearch}>Surprise me!</button>
        </div>
        
    </div>

    <div id='results' className='flex flex-col items-center justify-center mt-10'>
        <h2 className='text-red-600 text-4xl font-semibold mb-10'>Results</h2>
        <div className='flex flex-row flex-wrap items-center justify-center'> 
        {
          meals ? (
            meals.map((meal) => (
              <Mealcard meal={meal} key={meal.idMeal}/>
          ))
          ) : (
            <div className='flex flex-col items-center justify-center mb-10'>
              <h2 className='text-red-600 text-md font-semibold mb-2'>No meals found! Maybe we can choose for you?</h2>
              <button className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-7 py-1 ml-5" 
              onClick={handleRandomSearch}>Choose for me!</button>
            </div>
          )
      
        }
        </div>
    </div>
    </>
  )
}

export default Search