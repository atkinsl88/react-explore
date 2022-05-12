import React from 'react'
import { Link } from 'react-router-dom'

import image from '../../../assets/700x500.png'

const Content = () => (
  <>
    <div className="container text-image">
      <div className="text-col">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis, dui in venenatis dignissim, quam dui accumsan lectus, in congue mauris nulla at sapien. Nunc consequat felis consequat sem fringilla, non pellentesque tortor pretium. Sed a egestas magna, eu faucibus urna. Mauris fringilla interdum semper. Sed hendrerit odio a magna iaculis volutpat. Nulla commodo aliquet sagittis. Pellentesque lacinia in nisi sed viverra. Nulla gravida turpis at odio suscipit, vel semper ante sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <p>Onsectetur adipiscing elit. Cras iaculis, dui in venenatis dignissim, quam dui accumsan lectus, in congue mauris nulla at sapien. Nor pretium. Sed a egestas magna, eu faucibus urna. Mauris fringilla interdum semper. Sed hendrerit odio a magna iaculis volutpat. Nulla commodo aliquet sagittis. Pellentesque lacinia in nisi sed viverra. Nulla gravida turpis at odio suscipit, vel semper ante sollicitudin. Pellentesque habitant morbi tristique senectus et netus.</p>
      </div>
      <div className="image-col">
        <figure class="figure">
          <img src={image} class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."></img>
          <figcaption class="figure-caption">A caption for the above image.</figcaption>
        </figure>
      </div>
    </div>
  </>
)

export default Content