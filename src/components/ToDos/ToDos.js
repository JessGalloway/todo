import React, { useState, useEffect } from 'react'
import './ToDos.css'
import axios from 'axios'
import { Row, Container, Col } from 'react-bootstrap'
import SingleToDo from './SingleToDo'



export default function ToDos() {

  const [toDos, setToDos] = useState([])   
  // we need the empty array in the useState() again for .map

  const getToDos = () => {
    axios.get(`https://localhost:7252/api/ToDos`).then(response => {
      console.log(response)
      setToDos(response.data)
    })
  }

  useEffect(() => {
    getToDos()
  }, []);

  return (
        <Container className='ToDoContainer'>
            <main className='mainContent'>
                <Row>
                <h1>ToDos Dashboard</h1>
                </Row>
                <Col md={{span: 8, offset: 2}}>
                  <h1>
                    Task List
                  </h1>
                </Col>
                <Row>
                 <h1> {toDos.map(x =>
                  <SingleToDo 
                  key={x.toDoId}
                   toDo={x}
                   getToDos={getToDos}/>
                  )} </h1>                
                </Row>
            </main>
            </Container>
      )
}




// export default function ToDos() {
//   return (
//     <Container className='ToDoContainer'>
//         <main className='mainContent'>
//             <Row>
//             <h1>ToDos</h1>
//             </Row>
//             <Col md={{span: 8, offset: 2}}>
//               <h1>
//                 Todos will go here
//               </h1>
//             </Col>
//             <Row>
//               {/* <Logout /> */}
//             </Row>
//         </main>
//         </Container>
//   )
// }
