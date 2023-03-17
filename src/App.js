import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import Navigation from './components/Navigation'
import  ToDos from './components/ToDos/ToDos'
import Categories from './components/Categories/Categories'
import Login from './components/Auth/Login'
import AuthProvider from './contexts/AuthContext'
import Logout from './components/Auth/Logout'
// import ProtectedRoute from './components/ProtectedRoute'


export default function App() {
  return(
    <div className='App'>
      
      <AuthProvider>    
        <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<ToDos />} />
        <Route path='/ToDos' element={<ToDos />}/>
        <Route path='/Categories' element={<Categories />} />
        <Route path='/Login' element={<Login />} />
        <Route path = '/Logout' element={<Logout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
    </AuthProvider>

    </div>
  )
}