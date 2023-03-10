import React from 'react'
import { Container, Row } from 'react-bootstrap'
import LogIn from '../Auth/LogIn'



export default function Routing() {
  return (
    <section className="routing">
        <article className="text-center m-0 p-5 bg-info">
            <h1>Routing and Authentication</h1>
        </article>
        <Container>
                <Row>
                    
                    <LogIn />
                </Row>
        </Container>
    </section>
  )
}
