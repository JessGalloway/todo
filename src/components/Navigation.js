  
import React  from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'
import { useAuth } from '../contexts/AuthContext'




export default function Navigation() {
   const { currentUser } = useAuth()

  return (
    <Navbar variant='dark' bg='dark' expand='lg' className='p-3'>
        <Navbar.Brand href='/ToDos'>GSD</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>

    {/* TODO Log in pick with drop down */}
        <Nav>
      
            
            {currentUser && 
            <>            <Link to='/categories' className='nav-link'>
                Categories
            </Link>

            <Link to='/todos' className='nav-link'>
                Task List
            </Link>
            </>
            }
            {!currentUser &&     
                <Link to='/login' className='nav-link'>
                    Login    
                </Link>
            }   
               {currentUser &&
                    <>
                    <Link to='/logout'>
                        <button className="btn btn-primary  text-white logOut">
                           <span classname='logOutText'>Logout</span>
                        </button>
                    </Link>
                    </>
                }
        </Nav>
        
        </Navbar.Collapse>
    </Navbar>
    
        
            
  
        
    
  )
}

 
