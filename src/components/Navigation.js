    import {React, useState } from 'react'
import { Nav, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'


export default function Navigation() {
  return (
    <Navbar variant='dark' bg='dark' expand='lg' className='p-3'>
        <Navbar.Brand href='/'>ToDos</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>

    {/* TODO Log in pick with drop down */}
        <Nav>
            <Link to='/ToDos' className='nav-link'>
                ToDos
            </Link>
            <Link to='/Categories' className='nav-link'>
                Categories
            </Link>
            <Link to='/LogIn' className='nav-link '>
                Log In
                </Link>
        </Nav>
        
        </Navbar.Collapse>
    </Navbar>
    
        
            
  
        
    
  )
}

 
