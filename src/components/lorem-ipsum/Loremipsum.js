import React from 'react'
import { Helmet } from 'react-helmet';

import Hero from '../lorem-ipsum/modules/Hero'
import Breadcrumbs from '../common/Breadcrumbs'
import Accordion from '../lorem-ipsum/modules/Accordion'
import Content from '../lorem-ipsum/modules/Content'

const Loremipsum = () => {
  return (
    <section>
      <Helmet>
        <title>Lorem Ipsum</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <Hero />
      <Breadcrumbs />
      <Accordion />
      <Content />
    </section>
  )
}

export default Loremipsum