import React from 'react'
import './ToDos.css'
import { Row, Container, Col } from 'react-bootstrap'
import Logout from '../Auth/Logout'

export default function ToDos() {
  return (
    <Container>
        <main className='mainContent'>
            <Row>
            <h1>ToDos</h1>
            </Row>
            <Col md={{span: 8, offset: 2}}>
              <h1>
                Todos will go here
              </h1>
            </Col>
            <Row>
              <Logout />
            </Row>
        </main>
        </Container>
  )
}
