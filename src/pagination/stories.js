import React from 'react'
import { Row } from 'react-bootstrap';

import { graphql } from 'gatsby'

import SEO from '../seo/seo'
import Layout from '../components/layout'
import Header from '../components/header'
import Story from '../components/story'
import Pagination from '../components/pagination'

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {section: {eq: "story"}}}
      skip: $skip
      limit: $limit
    ){
      edges {
        node {
          id
          excerpt(pruneLength: 150, format: HTML, truncate: false)
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            section
            title
            date(formatString: "DD MMMM YYYY")
            author
            tags
            author_image {
              childImageSharp{
                  fixed(width: 40) {
                      ...GatsbyImageSharpFixed_noBase64
                  }
              }
            }
            image {
              childImageSharp{
                  fluid(maxWidth: 348) {
                      ...GatsbyImageSharpFluid_noBase64
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
      title={`Stories`}
      keywords={`stories`}
    />
    <section className="posts">
      <Header title="List of Stories" />
      <Row className="listrecent">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Story
            key={node.id}
            image={node.frontmatter.image}
            title={node.frontmatter.title}
            author={node.frontmatter.author}
            excerpt={node.excerpt}
            date={node.frontmatter.date}
            author_image={node.frontmatter.author_image}
            url={node.fields.slug}
            tags={node.frontmatter.tags}
            read={node.fields.readingTime.text}
          />
        ))}
      </Row>
    </section>
    <Pagination prefix="stories" pageContext={pageContext} />
  </Layout>
)
