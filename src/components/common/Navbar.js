import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (

    <nav>
      <div className="navbar-brand">
        <Link to="/" className="navbar-item navbar-start"></Link>
        <span aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div>
        <Link to="/homepage">Home</Link>
        <Link to="/page-1">Page 1</Link>
        <Link to="/page-2">Page 2</Link>
      </div>
    </nav>

  )
}

export default Navbar