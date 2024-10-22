import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MealItem({meal}) {

  const navigate=useNavigate()

  const handleClick=(idMeal)=>{
    console.log(idMeal)
    navigate(`${idMeal}`)
  }
  return (
       <>
        {
          meal.length > 0  ?( 
            meal.map((item)=>(
              <div className='card' key={item.idMeal} onClick={()=>handleClick(item.idMeal)}>
              <img src={item.strMealThumb}/>
              <h3>{item.strMeal}</h3>
              </div>
            ))
          ): 'Not Found'
          
        }
       </>
      



    
  )
}
