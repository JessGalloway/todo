import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import './Auth.css'



export default function Profile() {
  const { currentUser } = useAuth()

  return (
    <section className="profile">
      
        
          < div className=' text-center text-white info content-center'>
            Hello {!currentUser.displayName ? currentUser.email : currentUser.displayName.split(' ')[0]}!
            <div>            
              <img src={currentUser.photoURL} alt={currentUser.displayName} /> 
            </div>
          </div>
        
    </section>
    
  )
}
