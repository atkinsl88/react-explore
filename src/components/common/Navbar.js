import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

  render() {
    return (
      // Use Bootstrap navigation
      // Use Link from react-router-dom and change a tags to Link
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/home">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/lorem-ipsum">Lorem Ipsum</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/proin-sodales">Proin Sodales</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/duis-tristique">Duis Tristique</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar