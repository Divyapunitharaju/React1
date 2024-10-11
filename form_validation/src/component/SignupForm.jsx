import React from 'react';
import useForm  from '../hooks/useForm'
import { Validate } from '../utils/Validate';
import { LoginForm } from './LoginForm';
import {Link} from 'react-router-dom'
export const SignupForm = () => {
  
    const {values,handleUserInput,handleSubmit,errors}=useForm(Validate)
   
    
  return (
    <div className='container'>
        <form onSubmit={handleSubmit} className='form-container'>
        <div>
          <label htmlFor='username'>Username <span>*</span> </label>
          <input 
          id='username'
           type='text'
           placeholder='Enter Username'
           name='username'
           value={values.username}
           onChange={handleUserInput}
          />
          {errors.username && <p>{errors.username}</p>}
        </div><br/>
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
        </div><br/>
        <div>
          <label htmlFor='password2'>Confirm Password <span>*</span> </label>
          <input 
          id='password2'
           type='password'
           placeholder='Enter Confirm Password'
           name='password2'
           value={values.password2}
           onChange={handleUserInput}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div><br/>
        <button type='submit'>Register</button><br/>
        <span>Already have an Account ? Login <Link to="/login">here</Link></span>
      </form>  

    </div>
  )
}
