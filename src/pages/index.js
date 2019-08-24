import React from 'react'
import { Row } from 'react-bootstrap'
import { graphql } from 'gatsby'

import SEO from '../seo/seo'
import Layout from '../components/layout'
import Header from '../components/header'
import Project from '../components/project'
import Story from '../components/story'
import Heading from '../components/heading'
import Til from '../components/til'


export const query = graphql`
  query {
    stories: allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date]}
      filter: {frontmatter: {section: {eq: "story"}}}
    ){
      edges {
        node {
          id
          excerpt(pruneLength: 100, format: HTML, truncate: false)
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
            tags
            author
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
    projects: allMarkdownRemark(
      limit: 2
      sort: { order: DESC, fields: [frontmatter___date]}
      filter: {frontmatter: {section: {eq: "project"}}}
    ){
      edges {
        node {
          id
          html
          fields {
            readingTime {
              text
            }
          }
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            url
            author
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
    til: allMarkdownRemark(
      limit: 1
      sort: { order: DESC, fields: [frontmatter___date]}
      filter: {frontmatter: {section: {eq: "til"}}}
    ){
      edges {
        node {
          fields {
            slug
          }
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

export default ({ data }) => (
  <Layout>
    <SEO
      article={false}
      keywords={`programming adventures`}
      title={`Programming Adventures with Michał Kalbarczyk`}
    />
    <Heading title="Programming Adventures" lead="with Michał Kalbarczyk" />
    <section className="recent-posts">
      <Header title="Top Stories" link="More Stories &raquo;" url="/stories" />
      <Row className="listrecent">
        {data.stories.edges.map(({ node }) => (
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
    <section className="featured-posts">
      <Header title="Recent Projects" link="More Projects &raquo;" url="/projects" />
      <Row>
        {data.projects.edges.map(({ node }) => (
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
    <section className="til-list">
      <Header title="Last Learned" link="More &raquo;" url="/tils" />
      {data.til.edges.map(({ node }) => (
        <Til key={node.id} title={node.frontmatter.title} html={node.html} author={node.frontmatter.author} author_image={node.frontmatter.author_image} url={node.fields.slug}/>
      ))}
    </section>
  </Layout>
)
