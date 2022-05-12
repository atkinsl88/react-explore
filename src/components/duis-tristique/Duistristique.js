import React from 'react'
import { Helmet } from 'react-helmet';

import Hero from '../duis-tristique/modules/Hero'
import Content from '../duis-tristique/modules/Content'
import Form from '../duis-tristique/modules/Form'

const Duistristique = () => {
  return (
    <section>
      <Helmet>
        <title>Duis Tristique</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <Hero />
      <Content />
      <Form />
    </section>
  )
}

export default Duistristique