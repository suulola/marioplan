import React from 'react'
import { Link } from 'react-router-dom'

const SignedInLinks = () => {
  return (
<div className="navbar-nav w-100 d-flex justify-content-end mr-5">
      <Link className="nav-item nav-link" to="/create">New Project</Link>
      <Link className="nav-item nav-link" to="/">Log Out</Link>
      <Link className="nav-item nav-link rounded-circle bg-danger" to="/">NN</Link>
    </div>
    
  )
}

export default SignedInLinks
