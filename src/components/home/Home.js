import React from 'react'
import { Helmet } from 'react-helmet';

import Hero from '../home/modules/Hero'
import Content from '../home/modules/Content'

const Home = () => {
  return (
    <section>
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <Hero />
      <Content />
    </section>
  )
}

export default Home