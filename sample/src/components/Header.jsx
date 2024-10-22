import React from 'react'
import Logo from '../assets/react.svg'

export const Header = () => {
  return (
    <div className='d-flex p-2 justify-content-between shadow'>
      <span ><h1>Task</h1></span>
        <img src={Logo} alt=''/>
    </div>
  )
}
