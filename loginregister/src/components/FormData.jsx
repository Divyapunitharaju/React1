import React, { useState } from 'react'
import './FormData.css'

export default function FormData() {

  const [IsSignup,setIsSignUp]=useState(false)  
  const [form,setForm]=useState({
    fname:"",email:"",password:""
  })

  const handleClick=(e)=>{
    e.preventDefault();
    console.log('form',form)
    setForm({
      fname:"",email:"",password:""
    })
    
  }


  const handleChange=(event)=>{
        const {name,value}=event.target
        setForm((preform)=>({
          ...preform,[name]:value
        }))
       
      

  }



  return (
    <div className='container'>
      <form onSubmit={handleClick}>
        <h2>{IsSignup?"SignUp":"Login"}</h2>
        {
          IsSignup && (
            <>
            <label>Name</label> 
            <div id='input'>
              <input  
              type='text'
              placeholder='Enter Name'
              name='fname'
              value={form.fname}
              onChange={handleChange}
              required
              />
          </div>
        
            </>
          )
        }
        
        <label>Email</label>
         <div id='input'>
            <input 
            type='email' 
            placeholder='Enter Email'
            name='email'
            value={form.email}
            onChange={handleChange}
            required
            />
         </div>
         <label>Password</label>
         <div id='input'>
            <input 
            type='password'
            name='password'
            placeholder='*********'
            value={form.password}
            onChange={handleChange}
            required
            />
         </div>
         <div className='button'><button type='submit' >{IsSignup?"SignUp":"Login"}</button></div>
         
        
      </form>
      <p>
        {IsSignup?"Already have an account":"Dont't have an account"}
        <span 
        style={{color:"blue" }}
        onClick={()=>setIsSignUp(!IsSignup)}>
            
           <span style={{cursor:"pointer"}}>  {IsSignup?"Login":"Signup"}</span>
        </span>
      </p>
      

    </div>
  )
}
