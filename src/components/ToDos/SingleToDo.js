import React from 'react'
import './ToDos.css'




export default function SingleToDo(props) {
 
  return (
    <div className='todos'>
      <h3>{props.toDo.name}</h3>
    </div>
  )
}
