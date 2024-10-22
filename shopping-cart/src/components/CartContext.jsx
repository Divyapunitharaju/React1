import { createContext, useState } from "react";

const CartContext=createContext();

const CartProvider=({children})=>{
    const [cart,setCart]=useState([])

    const addCart=(item)=>{
        setCart((prevCart)=>[...prevCart,item])
    }

    const removeCart=(itemId)=>{
         setCart((prevCart)=> prevCart.filter(item=>item.id !== itemId))
    }

    return(
        <CartContext.Provider value={{cart,addCart,removeCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {
    CartContext,CartProvider
}