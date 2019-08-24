import React from 'react'
//import BackgroundImage Image rom 'gatsby-background-image'
import Image from 'gatsby-image'
//import { Link } from 'gatsby'
import { graphql } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../seo/seo'
import Tags from '../components/tags'
import Share from '../components/share'
import PrevNext from '../components/prevnext'
import Disqus from '../components/disqus'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
    ) {
      html
      excerpt(pruneLength: 100, format: PLAIN, truncate: false)
      frontmatter {
        section
        title
        rawDate: date
        schemaDate: date(formatString: "YYYY-MM-DD")
        date(formatString: "DD MMMM YYYY")
        author
        tags
        author_image {
          childImageSharp{
              fixed(width: 88) {
                ...GatsbyImageSharpFixed_noBase64
              }
          }
        }
      }
      fields {
        slug
        readingTime {
          text
        }
      }
    }
  }
`

export default ({ data, pageContext }) => (
  <Layout>
    <SEO
      article={true}
      title={data.markdownRemark.frontmatter.title}
      keywords={data.markdownRemark.frontmatter.tags}
      description={data.markdownRemark.excerpt}
      url={data.markdownRemark.fields.slug}
      date={data.markdownRemark.frontmatter.schemaDate}
    />
    <Container>
      <Row>
        <Col md={2} pl={0}>
          <Share
            tags={data.markdownRemark.frontmatter.tags}
            title={data.markdownRemark.frontmatter.title}
            url={data.markdownRemark.fields.slug}
          />
        </Col>
        <Col md={9} flex="first" flex-md="unordered">
          <div className="mainheading">
            <Row className="post-top-meta">
              <Col md={3} lg={2} className="col-xs-12 text-center text-md-left mb-4 mb-md-0">
                <Image fadeIn={false} className="author-thumb" fixed={data.markdownRemark.frontmatter.author_image.childImageSharp.fixed} title={data.markdownRemark.frontmatter.author} />
              </Col>
              <Col md={9} lg={10} className="col-xs-12 text-center text-md-left">
                <Link to="/about" className="link-dark">
                  {data.markdownRemark.frontmatter.author}
                </Link>
                <p>
                  <small>
                    <span className="post-date">
                      <time className="post-date" dateTime={data.markdownRemark.frontmatter.rawDate}>
                        {data.markdownRemark.frontmatter.date} - {data.markdownRemark.fields.readingTime.text}
                      </time>
                    </span>
                  </small>
                </p>
                <Tags tags={data.markdownRemark.frontmatter.tags} />
              </Col>
            </Row>
            <h1 className="posttitle">
              {data.markdownRemark.frontmatter.title}
            </h1>
          </div>
          <div className="article-post" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          <hr />
          <PrevNext navigation={pageContext.navigation} />
          <Disqus url={data.markdownRemark.fields.slug} identifier={data.markdownRemark.id} title={data.markdownRemark.frontmatter.title} />      
        </Col>
      </Row>
    </Container>
  </Layout>
)
