import React from 'react'
  import { useAuth }  from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import Profile from './Profile'
import { Container, Card, Col } from 'react-bootstrap'


export default function Logout() {
    const { logout } = useAuth()
    const navigate = useNavigate()

    function handleAuth() {
        logout()
        navigate('/')
    }

  return (
    <div className="logoutbg">
    <section className='logout text-center p-3 text-white'>
    
      <Col md={{span: 4, offset: 4}}>
      <Container className='cardContainer mx-auto mt-5'>
          <Card className='m-5 border-dark text-center ProfileCard'>
            <Card.Header className='bg-dark text-white text-center m-1'>
              <h2>Profile</h2>
            </Card.Header>
            <Card.Body className='bg-dark m-1 p-0'>
            <Profile />
            </Card.Body>
            
            <Card.Footer className='bg-dark m-1'>
            <button className="btn btn-info outButton" onClick={() => handleAuth()}>
              Log out
              </button>
            </Card.Footer>
        </Card>
      </Container>
      </Col>
    </section>
    </div>
  )
}
