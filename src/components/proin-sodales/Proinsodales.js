import React from 'react'
import { Helmet } from 'react-helmet';

import Hero from '../proin-sodales/modules/Hero'
import Content from '../proin-sodales/modules/Content'

const Proinsodales = () => {
  return (
    <section>
      <Helmet>
        <title>Proin Sodales</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <Hero />
      <Content />
    </section>
  )
}

export default Proinsodales