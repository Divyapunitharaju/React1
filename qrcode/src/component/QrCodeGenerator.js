import React, { useState } from 'react'
import './Qrcode.css';
import code from '../component/image.png'
export default function QrCodeGenerator() {
    const [img,setImg]=useState('')
   
  async  function generateCode(){
    try{
       const url='https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=divya'
       setImg(url)
    
    }
    catch{
      console.log("Error")
    }
    }

  return (
    <div className='container'>
        
        {img && <img src={img}/> }
        <input type='text' placeholder='Enter QR code'/>
        <input type='text' placeholder='Enter Image size'/>
        <button className='generator' onClick={generateCode}>QR code Generator</button>
        <button className='download'>Download Generator</button>
        

    </div>
  )
}
