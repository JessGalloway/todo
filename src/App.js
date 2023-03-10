import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import Navigation from './components/Navigation'
import  ToDos from './components/ToDos/ToDos'
import Categories from './components/Categories/Categories'
import LogIn from './components/Auth/LogIn'
import AuthProvider from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'


export default function App() {
  return(
    <div className='App'>
      <AuthProvider>    
        <Router>
      <Navigation />
      <Routes>
        <Route path='/ToDos' element={<ProtectedRoute><ToDos /></ProtectedRoute>}/>
        <Route path='/Categories' element={<ProtectedRoute><Categories /></ProtectedRoute>} />
        <Route path='/Login' element={<LogIn />} />
        
        <Route path='*' element={<NotFound />} />
      </Routes>
      
    </Router>
    </AuthProvider>

    </div>
  )
}