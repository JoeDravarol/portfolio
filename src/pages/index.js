import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/Seo'
import Home from 'components/Home'
import About from 'components/About'
import ReasonsToEmploy from 'components/ReasonsToEmploy'

const IndexPage = () => (
  <Layout>
    <SEO />
    <Home />
    <About />
    <ReasonsToEmploy />
  </Layout>
)

export default IndexPage
