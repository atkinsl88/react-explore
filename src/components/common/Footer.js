import React from 'react'
import { Link } from 'react-router-dom'

class Footer extends React.Component {

  render() {
    return (
      <>
        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item"><Link to="/lorem-ipsum" className="nav-link px-2 text-muted">Lorem Ipsum</Link></li>
              <li className="nav-item"><Link to="/proin-sodales" className="nav-link px-2 text-muted">Proin Sodales</Link></li>
              <li className="nav-item"><Link to="/duis-tristique" className="nav-link px-2 text-muted">Duis Tristique</Link></li>
            </ul>
            <p className="text-center text-muted">&copy; 2021 Company, Inc</p>
          </footer>
        </div>
      </>
    )
  }
}

export default Footer