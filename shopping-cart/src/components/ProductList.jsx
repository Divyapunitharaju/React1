import React, { createContext, useContext } from 'react'
import { CartContext } from './CartContext'
 

export default function ProductList() {

  const {addCart}=useContext(CartContext)

   const products=[
    {id:1,name:'product 1'},
    {id:2,name:'product 2'}
   ]


  return(
   <>
    {
      products.map((product)=>(
        <div key={product.id}><div>{product.name}</div>
         <button onClick={()=>addCart(product)}>Add</button>
        </div>
      ))
    }
   
   
   </>
  )
}
