import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (

    // Use Bootstrap navigation
    // Use Link from react-router-dom and change a tags to Link
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/homepage">Home</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/homepage">Home<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/homepage">Home</Link>
          </li>
          <li className="nav-item">
           <Link className="nav-link" to="/homepage">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/homepage">Home</Link>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar