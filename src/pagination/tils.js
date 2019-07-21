import React from 'react'

import { graphql } from 'gatsby'

import SEO from '../seo/seo'
import Layout from '../components/layout'
import Header from '../components/header'
import Pagination from '../components/pagination'
import Til from '../components/til'

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {section: {eq: "til"}}}
      skip: $skip
      limit: $limit
    ){
      edges {
        node {
          id
          html
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            author
            author_image {
              childImageSharp{
                  fixed(width: 45) {
                      ...GatsbyImageSharpFixed_noBase64
                  }
              }
            }
          }
        }
      }
    }
  }
`

export default ({ data, pageContext }) => (
  <Layout>
    <SEO
      article={false}
      title={`Today I Learned`}
      keywords={`til today i learned`}
    />
    <Header title="Today I Learned" />
    <section className="til-list">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Til key={node.id} title={node.frontmatter.title} html={node.html} author={node.frontmatter.author} author_image={node.frontmatter.author_image} />
      ))}
    </section>
    <Pagination prefix="tils" pageContext={pageContext} />
  </Layout>
)
