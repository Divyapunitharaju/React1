import React, { useState } from 'react'

export default function List() {

    const [item,setItem]=useState(['item 1','item 2','item 3','item 4'])
     
 
    const handleClick=(index)=>{
       setItem(item.filter((_,i)=>(
        i!==index
       )))    
    
    }
    
  return (
    <div>
       <ul>
        {
            item.map((item,index)=>(
                <li key={index}>{item}
                  <button onClick={()=>handleClick(index)}>Delete</button>
                </li>
            ))
        }  
      </ul> 

    </div>
  )
}
