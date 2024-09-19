import React, { useContext } from 'react'
import { CartContext } from '../components/CartContext'

export default function Cart() {

   const {cart,removeCart} =useContext(CartContext)


  return (
        
    <div>
       {
        cart.map((item ,index)=>(
          <div key={index}>
            {item.name}
            <button onClick={()=>removeCart(item.itemId)}>Remove Cart</button>
          </div>

        ))
       }
    </div>

  )
}
