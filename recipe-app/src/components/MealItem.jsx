import React from 'react'

export default function MealItem({meal}) {
  return (
       <>
        {
          meal.length > 0  ?( 
            meal.map((item)=>(
              <div className='card' key={item.idMeal}>
              <img src={item.strMealThumb}/>
              <h3>{item.strMeal}</h3>
              </div>
            ))
          ): 'Not Found'
          
        }
       </>
      



    
  )
}
