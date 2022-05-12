import React from 'react'
import { Link } from 'react-router-dom'

import image from '../../../assets/700x500.png'

const Content = () => (
  <>
    <div className="container text-image">
      <div className="text-col">
        <p>Morbi augue nisl, blandit non quam eu, gravida interdum magna. Curabitur orci ligula, elementum a lorem sed, porta faucibus dolor. Nullam suscipit, orci et tristique tempor, nibh nisi rutrum turpis, at faucibus nisl ligula nec mauris. Mauris tristique augue in volutpat tincidunt. Integer sit amet elit ut lacus lacinia laoreet. Suspendisse tincidunt, lorem eget auctor sagittis, orci sem tempus nibh, quis fringilla ipsum lacus in ligula. Morbi eget nunc sapien. Nunc a rutrum lectus, sed ornare lectus. Aliquam erat volutpat. Morbi quis neque vel ex consequat tincidunt in sit amet urna. Curabitur tempor egestas purus, sit amet vestibulum risus vestibulum eget. Vivamus pulvinar, ipsum a ultrices fringilla, nisl ante mollis neque, congue vehicula nisl risus nec ante.</p>
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