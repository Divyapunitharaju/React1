import { useState } from 'react'
import './App.css'
import List from './componenets/List'

function App() {
  //  const [input,setInput]=useState('')
  //  const [task,setTask] =useState([])
   
  //   const handleClick=()=>{
  //     if(input){
  //       setTask([...task,input])
  //       // console.log(input)
  //       setInput('')
  //     }
       
  //   }

  //   const handleDelete=(index)=>{
  //       setTask(task.filter((_,i)=>(
  //            i!==index
  //       )))
  //   }
   
   

  // return (
  //  <>
  //  <input 
  //    type='text'
  //    onChange={(e)=>setInput(e.target.value)}
  //    value={input}
  //  />
  //  <button onClick={handleClick}>Add</button>
    
  //  <div>
  //  {
  //     task.map((value,index)=>(
  //        <div key={index}>{value}
  //         <button onClick={()=>handleDelete(index)}>Delete</button>
  //        </div>
  //     ))
  //   }
  //  </div>
    
   
 
  //  </>
  // )

  return(
    <div>
      <List />
    </div>
  )
}

export default App
