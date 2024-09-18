
import './App.css'
import { themeContext} from './Context'
import { useContext, useState } from 'react'


function App() {

  const {theme,setTheme} =useContext(themeContext)
  
  
const handleDark=()=>{
   setTheme(theme === 'dark' ?'light':'dark')
 
}


  return (
    <>
    <div className={`container ${theme}`} >
       
        <button onClick={handleDark}>On/Off</button>
      
    </div>
            
    </>
  )
}

export default App
