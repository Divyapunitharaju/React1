import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './components/Cart'
import ProductList from './components/ProductList'

function App() {
  

  return (
    <>
       <ProductList />
       <Cart />
       
    </>
  )
}

export default App