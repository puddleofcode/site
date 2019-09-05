import React from 'react'
import { Row } from 'react-bootstrap';

import { graphql } from 'gatsby'

import SEO from '../seo/seo'
import Layout from '../components/layout'
import Header from '../components/header'
import Project from '../components/project'
import Pagination from '../components/pagination'

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {section: {eq: "project"}}}
      skip: $skip
      limit: $limit
    ){
      edges {
        node {
          id
          html
          frontmatter {
            section
            title
            date(formatString: "DD MMMM YYYY")
            author
            tags
            url
            author_image {
              childImageSharp{
                  fixed(width: 40) {
                      ...GatsbyImageSharpFixed_noBase64
                  }
              }
            }
            image {
              childImageSharp{
                  fluid(maxWidth: 305) {
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
      title={`Projects`}
      keywords={`projects`}
    />
    <section className="posts">
      <Header title="List of Projects" />
      <Row>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Project
            key={node.id}
            image={node.frontmatter.image}
            title={node.frontmatter.title}
            author={node.frontmatter.author}
            excerpt={node.html}
            date={node.frontmatter.date}
            author_image={node.frontmatter.author_image}
            url={node.frontmatter.url}
            tags={node.frontmatter.tags}
            read={false}
          />
        ))}
      </Row>
    </section>
    <Pagination prefix="projects" pageContext={pageContext} />
  </Layout>
)
