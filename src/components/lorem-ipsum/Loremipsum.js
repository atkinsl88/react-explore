import React from 'react'
import { Helmet } from 'react-helmet';

import Hero from '../lorem-ipsum/modules/Hero'
import Content from '../lorem-ipsum/modules/Content'

const Loremipsum = () => {
  return (
    <section>
      <Helmet>
        <title>Lorem Ipsum</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <Hero />
      <Content />
    </section>
  )
}

export default Loremipsum