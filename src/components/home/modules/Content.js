import React from 'react'
import { Link } from 'react-router-dom'

import image from '../../../assets/700x500.png'

const Content = () => (
  <>
    <div className="container text-image">
      <div className="text-col">
        <p>Vivamus porta luctus maximus. Donec a nunc neque. Pellentesque et eros non lectus vulputate hendrerit. Nam eget eleifend nisi. Nunc pulvinar at lorem nec finibus. Maecenas fringilla rutrum nulla eget pretium. Praesent felis arcu, facilisis eget est quis, imperdiet sagittis turpis. Maecenas faucibus justo et nisi sagittis, a pellentesque risus finibus. Vestibulum vel metus at ligula eleifend faucibus quis vel ipsum. Donec dictum fringilla dui vitae tincidunt.</p>
        <p>Nullam eget tincidunt lectus, ut convallis justo. Duis elementum varius risus id pellentesque. Integer ipsum sapien, interdum et imperdiet vitae, aliquet eget ante. Maecenas non eleifend sem, eget hendrerit mauris. Nunc non orci justo. Donec neque orci, pretium tincidunt varius sit amet, cursus bibendum dui. Quisque nec dolor a justo elementum blandit. Sed molestie tortor non ultricies hendrerit. Quisque a elementum tortor, quis aliquet neque.</p>
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