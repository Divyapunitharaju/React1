import React from 'react'
import useForm from '../hooks/useForm'
import { Validate } from '../utils/Validate'

export const LoginForm = () => {
    const {values,errors,handleSubmit,handleUserInput}=useForm(Validate)
  return (
    <div className='container'>
        <form className='form-container' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email <span>*</span> </label>
          <input 
          id='email'
          type='email'
          placeholder='Enter Email'
          name='email'
          value={values.email}
          onChange={handleUserInput}
          />
          {errors.email && <p>{errors.email}</p>}
        </div><br/>
        <div>
          <label htmlFor='password1'>Password <span>*</span> </label>
          <input 
          id='password1'
           type='password'
           placeholder='Enter Password'
           name='password1'
           value={values.password1}
           onChange={handleUserInput}
          />
          {errors.password1 && <p>{errors.password1}</p>}
        </div>
        <button>Login</button>
        </form>
        
    </div>
  )
}
