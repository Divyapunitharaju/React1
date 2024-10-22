import React, { useState } from 'react'
import { useParams } from 'react-router'

export default function RecipeInfo() {
  const [item,setItem]=useState('')
  const {Mealid}=useParams()

   if(Mealid !="")
   {
    fetch (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Mealid}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data.meals[0])
      setItem(data.meals[0])
    })
   }


  return (
    <>
    <div className='recipeinfo'>
    <div className='content'>
      <img src={item.strMealThumb} alt='' />
       <div className='inner-content'>
        <h2>{item.strMeal}</h2>
        <h2>{item.strArea} Food</h2>
        <h3>Category {item.strCategory}</h3>
       </div>
         
    </div>
    <div className='recipe-details'>
      <div className='ingredients'>
        <h2>Ingredients</h2>
         <h4>{item.strIngredient1} : {item.strMeasure1}</h4>
         <h4>{item.strIngredient2} : {item.strMeasure2}</h4>
         <h4>{item.strIngredient3} : {item.strMeasure3}</h4>
         <h4>{item.strIngredient4} : {item.strMeasure4}</h4>
         <h4>{item.strIngredient5} : {item.strMeasure5}</h4>
         <h4>{item.strIngredient6} : {item.strMeasure6}</h4>
         <h4>{item.strIngredient7} : {item.strMeasure7}</h4>
         <h4>{item.strIngredient8} : {item.strMeasure8}</h4>
         <h4>{item.strIngredient9} : {item.strMeasure9}</h4>
         <h4>{item.strIngredient10} : {item.strMeasure10}</h4>

      </div>

    </div>
    </div>

   
    </>
   
    

  )
}
