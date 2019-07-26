import React from 'react'
//import { Link } from 'gatsby'
import { Col, Row } from 'react-bootstrap';
//import BackgroundImage Image rom 'gatsby-background-image'
import Image from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import SEO from '../seo/seo'
import Layout from '../components/layout'
import Header from '../components/header'
import Tags from '../components/tags'
import Link from '../components/link'

import { FaEnvelope, FaGithub, FaTwitter, FaMedium, FaLinkedin } from 'react-icons/fa';

const query = graphql`
query {
  placeholderImage: file(relativePath: { eq: "me.jpg" }) {
    childImageSharp {
      fixed(width: 240) {
        ...GatsbyImageSharpFixed_noBase64
      }
    }
  }
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___start_date]}
    filter: {frontmatter: {section: {eq: "company"}}}
  ) {
    edges {
      node {
        id
        html
        frontmatter {
          title
          start_date(formatString: "MMMM YYYY")
          end_date(formatString: "MMMM YYYY")
          tags
          link
          image {
            childImageSharp{
                fixed(height: 180, width: 180) {
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

const render = (data) => (
  <Layout>
    <SEO
      article={false}
      title={`About`}
      keywords={`about`}
    />
    <section>
      <div className="article-post">
        <Row className="justify-content-between">
          <Col md={4}>
            <div className="sticky-top sticky-top-80 text-center">
              <Image fadeIn={false} fixed={data.placeholderImage.childImageSharp.fixed} title="Puddle Of Code" backgroundColor={`#fff`} />
              <h2>Michał Kalbarczyk</h2>
              <h4>Software Engineer</h4>
              <p>
                <Link className="web-link" to="&#x6d;&#97;&#105;&#108;&#x74;&#111;&#x3a;&#x6d;&#x69;&#99;&#x68;&#x61;&#108;&#46;&#x6b;&#97;&#x6c;&#x62;&#x61;&#x72;&#x63;&#x7a;&#121;&#x6b;&#x40;&#103;&#109;&#x61;&#105;&#108;&#46;&#99;&#111;&#109;"><FaEnvelope /></Link>
                <Link className="web-link" to="https://github.com/fazibear"><FaGithub /></Link>
                <Link className="web-link" to="https://twitter.com/fazibear"><FaTwitter /></Link>
                <Link className="web-link" to="https://linkedin.com/in/fazibear"><FaLinkedin /></Link>
                <Link className="web-link" to="https://medium.com/@fazibear"><FaMedium /></Link>
              </p>
            </div>
          </Col>
          <Col md={8} pr={5}>
            <Header title="About Me" />
            <Row>
              <Col md={12}>
                <p>
                  With 14 years of overall commercial programming experience, I gained extensive and practical knowledge of designing, programming, maintaining and optimising sophisticated services.
                </p>
                <p>
                  Interested in many modern technologies like Elixir, Phoenix, Nerves, Ruby, Ruby On Rails, Sinatra, JavaScript, React, GraphQL, JSON, AMQP, SQL, NoSQL, MRuby, RubyMotion, iOS, Chef, Linux, Arduino, RaspberryPi and more.
                </p>
              </Col>
            </Row>
            <Header title="Commercial Experience" />
            <Row>
              <Col md={12}>
                <div className="main-timeline">
                  {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id} className="timeline">
                      <div className="timeline-content">
                        <div className="icon">
                          <span></span>
                        </div>
                        <div className="circle">
                          <span>
                            <a href={node.frontmatter.link}>
                              <Image fadeIn={false} fixed={node.frontmatter.image.childImageSharp.fixed} backgroundColor={`#FFF`} title={node.frontmatter.title} />
                            </a>
                          </span>
                        </div>
                        <div className="content">
                          <span className="title">
                            {node.frontmatter.title}
                          </span>
                          <h2 className="year">
                            {node.frontmatter.start_date} - {node.frontmatter.end_date}
                          </h2>
                          <Tags tags={node.frontmatter.tags} />
                          <div className="description" dangerouslySetInnerHTML={{ __html: node.html }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  </Layout>
)

export default () => (
  <StaticQuery query={query} render={render} />
)
