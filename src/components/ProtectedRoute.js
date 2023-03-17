// import React from 'react'
// import { useAuth } from '../contexts/AuthContext'
// import  { Navigate } from 'react-router-dom'

// //below we are making a component that redirects the undauthenticated user to the login page. We pass in children
// //in the params as a prop which refers to any component that is nested inside of protected route tags.
// export default function ProtectedRoute({children}) {

//     const {currentUser} = useAuth()

//     //Below we check the currentUser value. If no user, kick to login. If user is authenticated show the children.
//   return currentUser ? children : <Navigate to='/login' />
// }