import React, { useContext } from 'react'
import { CartContext } from '../components/CartContext'

export default function Cart() {

   const {cart} =useContext(CartContext)


  return (
        
    <div>
       {
        cart.map((item ,index)=>(
          <div key={index}>{item}</div>
        ))
       }
    </div>

  )
}
