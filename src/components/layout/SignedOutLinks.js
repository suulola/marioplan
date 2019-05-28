import React from 'react'
import { Link } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
<div className="navbar-nav w-100 d-flex justify-content-end mr-5">
      <Link className="nav-item nav-link text-white" to="/signup">SignUp</Link>
      <Link className="nav-item nav-link text-white" to="/signin">Login </Link>
    </div>
    
  )
}

export default SignedOutLinks
