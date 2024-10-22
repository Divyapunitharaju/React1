import './App.css'
import { useContext, useState } from 'react'
import { themeContext } from './Context'
import { authContenxt } from './Auth'

function App() {
 const {Theme,setTheme}=useContext(themeContext)
 const {user,login,logout}=useContext(authContenxt)
 const [input,setInput]=useState()

  const handleTheme=()=>{
    setTheme(Theme === 'light' ?'dark':'light')
  }


  const handleSubmit =(e)=>{
     e.preventDefault();
     login(input)
     setInput('')
  }

  const logoutFun=()=>{
    logout()
  }

  return (
    <div style={{background : Theme === 'light'?'#fff':'#333' ,height:"100vh",color:Theme === 'light' ? '#333': '#fff'} }>
      The theme is {Theme}
      <button onClick={handleTheme}>Toggle Theme</button>
      <br></br>
   
      
      <form onSubmit={handleSubmit}>
      My name is  {user}
        <input  
         value={input}
         onChange={(e)=>{setInput(e.target.value)}}
        />
        <button>Login</button>
      </form>
      <button onClick={logoutFun}>Logout</button>
    </div>
  )
}

export default App
