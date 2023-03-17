import React, { useState, useEffect } from 'react' // useState is for the categories hook and useEffect to automate api call
import { Container } from 'react-bootstrap'
//npm install axios gives us access to the package below to make API calls (Get, Post, Put, Delete)
import axios from 'axios'
import SingleCategory from './SingleCategory'


// Read functionality
// 1: add usestate and useEffect to the react import
// 2: install and import axios
// 3: create a hook to store the data
// 4: create a function that uses axios to call for the categories
// 5: create a useEffect to automate data retrieval and 
// 6: use .map to render the categories to the screen 




export default function Categories() {


  const [categories, setCategories] = useState([])

  const getCategories = () => {
    axios.get(`https://localhost:7252/api/Categories`).then(response => {
      console.log(response)
      setCategories(response.data)
    })//back ticks gives us the option to come back and interpolate later
  }
  //CODE ABOVE SYNAPSE 
  // goes out to api grabs catiegories and sets the categories hook to the response data

  //1st param is a function, 2 param is an array of objects we can listen for and rerun useEffect if / when 
  //they change by default, [] is just going to run once as the component mounts in the UI
  useEffect(() => {
    getCategories()
  }, []) 


  return (
  
    <section className="categories">
      {/* article.bg-info.p-5>h1.text-center{Categories Dashboard} to build out whats below*/}
      <article className="bg-info p-5">
        <h1 className="text-center">Categories Dashboard</h1>
      </article>
      <Container className='p-2'>
        <table className="table bg-info table-dark my-3">
          <thead className='table-secondary text-uppercase'>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {/* READ UI */}
            {categories.map(x =>
                <SingleCategory key={x.categoryId} category={x}/>
              )}
              
            
          </tbody>
        </table>
      </Container>
    </section>
  
  )
}
