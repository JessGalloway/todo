import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import Profile from './Profile'

export default function Logout() {
    const { logout } = useAuth()
    const navigate = useNavigate()

    //just going to the home page so don't need an asyn function werenot waiting for a response
    function handleAuth() {
        logout()
        navigate('/')
        
    }

  return (
    <div className='logout text-center p-3 bg-dark text-white'>
      <Profile />
        <button className="btn btn-info" onClick={() => handleAuth()}>
            Logout
        </button>
    </div>
  )
}
