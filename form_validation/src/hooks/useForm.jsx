import React from 'react'
import { useState } from 'react'

const useForm = (Validate) => {
    
    const [values,setValue]=useState({
        username:"",email:"",password1:"",password2:""
     })
    
     const [errors,setError]=useState({})
    
     const handleUserInput=(e)=>{
       const {value,name} = e.target
       setValue((curVal)=>{
        return{...curVal,[name]:value} 
       })
     }

     const handleSubmit=(e)=>{
         e.preventDefault()
         setError(Validate(values))
     }
  return ({values,errors ,handleUserInput,handleSubmit,errors})
 
      
   
  
}

export default useForm