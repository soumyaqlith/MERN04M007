import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router';

let baseUrl = "https://www.themealdb.com/api/json/v1/1/"

function Foods() {

    let [foods, setFoods] = useState([]);
    let [search, setSearch] = useState(null);
    let [debouncedSearch, setDebouncedSearch] = useState();

    useEffect(() => {
        setTimeout(() => {
            setDebouncedSearch(search)
        }, 800)
    }, [search])

    let navigate = useNavigate()


    let fetchFoods = async (search) => {
        try {
            if (search != null) {
                let res = await axios.get(`${baseUrl}search.php?s=${search}`);
                // console.log("meals wise", res.data.meals)
                setFoods(res?.data?.meals);
            } else {
                let res = await axios.get(`${baseUrl}categories.php`);
                setFoods(res?.data?.categories);
                // console.log("category wise ", res.data.categories)
            }
        } catch (error) {
            alert("something wrong");
        }
    }

    useEffect(() => {
        fetchFoods(debouncedSearch)
    }, [debouncedSearch])


    return (
        <div className='min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50'>
            <div className='max-w-7xl mx-auto px-6 py-10'>
                <h1
                    className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'
                >
                    Eplore Food Catagories 🍽️
                </h1>
                <div className='flex items-center gap-3 bg-white shadow-lg p-3 w-full md:w-1/2 rounded-lg'>
                    <IoSearch size={22} className='text-gray-400' />
                    <input
                        type="text"
                        placeholder='Search food cataegory...'
                        className='w-full outline-none text-gray-700'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
            <div className='max-w-7xl mx-auto px-6 pb-20'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {
                        foods?.reverse()?.map((ele) => (
                            <div
                                className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition'
                                key={ele.idCategory}
                            >
                                <img
                                    src={ele?.strCategoryThumb || ele?.strMealThumb}
                                    alt=""
                                    className='h-48 w-full object-cover'
                                />

                                <div className='p-5'>
                                    <h2 className='text-xl font-bold mb-2 text-gray-800'>
                                        {ele?.strCategory}
                                    </h2>
                                    <p className='text-gray-600 text-sm line-clamp-3'>
                                        {ele?.strCategoryDescription || ele?.strMeal}
                                    </p>
                                    <button
                                        className='text-white mt-4 w-full bg-linear-to-r from-red-600 to-orange-500 p-2 rounded-lg'
                                        onClick={() => navigate(`/food/${ele.idCategory || ele.idMeal}`)}
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Foods