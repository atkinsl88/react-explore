import React from 'react'
import { Link } from 'react-router-dom'

const Content = () => (

  <section>
    <div className="content-container">
      <div className="content-container-top">
        <div className="content-container-top-left">
          <div className="content-heading">
            <p>Development Work</p>
          </div>
          <div className="content-para">
            <p>Currently working on ReactJS based projects. Learning WordPress, Drupal and I am passionate about other technologies. In my portfolio you will find a range of projects: Vanilla JavaScript interactive games, Python (Django), Express, Node.JS and REST. Also learning how to model data safely in SQL and NoSQL. Consumed and integrated third party API’s in applications too.</p>
            <Link to="/development">Find out more</Link>
          </div>
        </div>
        <div className="content-container-top-right">
          <div className="content-image-right">
            <img src="" alt="logo" />
          </div>
        </div>
      </div>
      <div className="content-container-bottom">
        <div className="content-container-bottom-left">
          <div className="content-image-left">
            <img src="" alt="logo" />
          </div>
        </div>
        <div className="content-container-bottom-right">
          <div className="content-heading">
            <p>Design Work</p>
          </div>
          <div className="content-para">
            <p>Passionate about digital design and enjoy designing projects before working on them. Competent with Sketch, InVision, Zeplin and PS. In my portfolio you will find links to responsive designs which I have designed and artworked before developing the solution.</p>
            <Link to="/design">Find out more</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  
)

export default Content