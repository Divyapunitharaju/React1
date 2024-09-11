import React, { useState } from 'react'

export default function FormData() {

  const [IsSignup,setIsSignUp]=useState(false)  
  const [form,setForm]=useState({
    fname:"",email:"",password:""
  })

  const handleClick=(e)=>{
    e.preventDefault();
    console.log('form',form)
  }


  const handleChange=(event)=>{
        const name=event.target.name
        const value=event.target.value
        setForm((e)=>({
          ...form,[name]:value
        }))
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <h2>{IsSignup?"SignUp":"Login"}</h2>
        <label>Name</label>
        <div>
            <input  
            type='text'
            placeholder='Enter Name'
            value={form.fname}
            onChange={handleChange}
            required
            />
        </div>
        <label>Email</label>
         <div>
            <input 
            type='email' 
            placeholder='Enter Email'
            value={form.email}
            onChange={handleChange}
            required
            />
         </div>
         <label>Password</label>
         <div>
            <input 
            type='password'
            placeholder='*********'
            value={form.password}
            onChange={handleChange}
            required
            />
         </div>
         <button type='submit' >{IsSignup?"SignUp":"Login"}</button>
        
      </form>
      <p>
        {IsSignup?"Already have an account":"Dont't have an account"}
        <span 
        style={{color:"blue"}}
        onClick={()=>setIsSignUp(!IsSignup)}>
            
            {IsSignup?"SignUp":"Login"}
        </span>
      </p>
      

    </div>
  )
}
