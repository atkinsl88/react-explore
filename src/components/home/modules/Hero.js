import React from 'react'
import { Link } from 'react-router-dom'
import { FaBeer } from 'react-icons/fa';

const Hero = () => {
  return (
    <>
      <div class="px-4 py-5 my-5 text-center">
        <h1 class="display-5 fw-bold">Welcome</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">n tincidunt dui lacus. Fusce pulvinar dui eu lacus sodales posuere.</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/lorem-ipsum"><button type="button" className="btn btn-primary btn-lg px-4 gap-3">Lorem Ipsum <FaBeer /></button></Link>
            <Link to="/duis-tristique"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Duis Tristique</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero