import React from 'react'

export default function RecipeIndex({alphaIndex}) {
    const alpha=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  return (
    <div className='alpha-container'>
      
      {
      alpha.map((item,id)=>(
         <div className='alpha' key={id} onClick={()=>alphaIndex(item)} >
           <h3>{item}</h3>
         </div>
      ))

      }

    </div>
  )
}
