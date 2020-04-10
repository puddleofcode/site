import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
//import BackgroundImage Image rom 'gatsby-background-image'
import Image from 'gatsby-image'

const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(height: 45) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`

const render = (data) => (
  <Image
    fadeIn={false}
    fixed={data.placeholderImage.childImageSharp.fixed}
    title="Puddle Of Code"
    backgroundColor={`#FFF`}
  />
)

// import logo2 from '../images/logo.png'
// const render2 = (data) => (
//   <img src={logo2} alt="xxx" />
// )

export default () => <StaticQuery query={query} render={render} />
