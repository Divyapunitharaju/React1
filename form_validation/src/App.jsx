import { useState } from 'react'
import './App.css'
import { SignupForm } from './component/SignupForm'
import { LoginForm } from './component/LoginForm'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
      
    
  )
}

export default App
