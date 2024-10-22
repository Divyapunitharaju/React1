import React, { useState } from 'react'
import './style.css'
import MealItem from './MealItem'
import RecipeIndex from './RecipeIndex'
import { useEffect } from 'react'

export default function Meal() {
   
    const [meal,setMeal]=useState([])
    const [input,setInput]=useState('')

    
    const fetchApi=(alpha)=>{
        const urlapi=`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`

        fetch(urlapi)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not OK');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          setMeal(data.meals)
        })
        .catch(error => {
          console.error('Error:', error);
        });
      


            // fetch(urlapi)
            // .then((res)=>res.json())
            // .then((data)=>setMeal(data.meals))
    }
     
    useEffect(()=>{
      fetchApi('')
    },[])

    const setAlpha=(alpha)=>{
         fetchApi(alpha)
    }


    const searchApi=(search)=>{
        const urlapi=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`

            fetch(urlapi)
            .then((res)=>res.json())
            .then((data)=>setMeal(data.meals))
    }
    

    const handleSearch=(e)=>{
        const search=e.target.value
        setInput(search)

        if(search!=='')
        {
            searchApi(search)
        }
        else{
            searchApi('')
        }
        setInput()
    }


    return (
        <div className='container'>
            <div className='heading'>
                <h1>Search Your Food Recipe</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam vel distinctio sed blanditiis eos nulla, odit modi quam vitae? </p>
                <div className='searchInput'>
                    <input
                        type='search'
                        value={input}
                        onChange={handleSearch}
                    />
                </div>
                  <div className='gridItem'>
                  <MealItem  meal={meal}/>
                  </div>
                  <div className='index'>
                    <RecipeIndex alphaIndex={(alpha)=>setAlpha(alpha)}/>
                  </div>
                  


            </div>






        </div>
    )
}
