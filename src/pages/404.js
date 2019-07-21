import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
//import BackgroundImage Image rom 'gatsby-background-image'
import Image from 'gatsby-image'

import Layout from '../components/layout'

const query = graphql`
 query {
   placeholderImage: file(relativePath: { eq: "404.png" }) {
     childImageSharp {
       fixed(height: 300) {
         ...GatsbyImageSharpFixed_noBase64
       }
     }
   }
 }
`

const render = (data) => (
  <Layout>
    <Image fadeIn={false} fixed={data.placeholderImage.childImageSharp.fixed} title="404" backgroundColor={`#fff`} className="mx-auto d-block" />
  </Layout>
)

export default () => (
  <StaticQuery query={query} render={render} />
)