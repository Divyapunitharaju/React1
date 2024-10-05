import { useState,useMemo } from 'react'
import './App.css'

function App() {
  const [num,setNum]=useState(0);

  const fact=(n)=>{
    let f=1;
    for(let i=1;i<=n;i++)
    {
       f=f*i;
    }
    return f
    
  }

  const handleInput=useMemo(()=>(fact(num)),[num])

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    setNum(value || "");  
  };


  return (
    <>
       <input type='text' value={num} onChange={ handleInputChange}/>
         {handleInput}     
    </>
  )
}

export default App
