import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const [name,setName]=useState("Divya")

  useEffect(()=>{
    setCount(2);


    return ()=>{
      setCount(null)
      console.log("clean")
    }
  },[count])

  console.log(count)

  return (
    <>
      {count}
      <button onClick={()=>setCount((count)=>count+1)} >Click</button>
      
    </>
  )
}

export default App
