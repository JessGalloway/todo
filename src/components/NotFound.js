import React from 'react'
import image from '../images/notHere.jpg'
import './NotFound.css'


export default function NotFound() {
  return (
    
    <div className='content'>
        
        <img src={image} alt='Page Not Found'/>
        <img src={image} alt='Page Not Found'/>
        <img src={image} alt='Page Not Found'/>
        <div className="help">
        <h1>404.</h1>
        <h2 className='notFound'>Page Not Found</h2>
        </div>
    </div>
    
    
  )
}
