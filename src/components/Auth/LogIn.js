import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Container, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function LogIn() {
  const { login } = useAuth();
  const navigate = useNavigate();

    async function handleAuth() { 

        await login();
      return (
        navigate('/')
    )
  }



  return (
  //Step 3: Create the UI and use Login as needed
    <div className='login'>
        <article className="bg-info mb-5 p-5 text-dark">
            <h1 className='text-center'>Welcome to ResourcePlus!</h1>
        </article>
        <Container>
            <Card className='m-2 border-dark text-center'>
                <Card.Header className='bg-dark text-white'>
                    <h2>Login for full functionality</h2>
                </Card.Header>
                <Card.Body>
                    <button className="btn btn-success" onClick={() => handleAuth()}>
                        Login with GitHub
                    </button>
                </Card.Body>

            </Card>
        </Container>
    </div>
  )
}
