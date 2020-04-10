import React from 'react'
import { CardGroup, Card, Row, Col } from 'react-bootstrap'
//import BackgroundImage Image rom 'gatsby-background-image'
import Image from 'gatsby-image'
import Link from './link'

import Author from './author'
import Excerpt from './excerpt'
import Tags from './tags'

export default ({
  title,
  excerpt,
  author,
  date,
  url,
  image,
  author_image,
  tags,
  read,
}) => (
  <Col md={6} className="mb-30px">
    <div className="listfeaturedtag h-100">
      <Row className="h-100">
        <Col lg={5} md={12} className="pr-lg-0">
          <div className="h-100">
            <div className="wrapthumbnail">
              <Link to={url}>
                <Image
                  Tag="span"
                  className="thumbnail d-block"
                  fluid={image.childImageSharp.fluid}
                />
              </Link>
            </div>
          </div>
        </Col>
        <Col lg={7} md={12}>
          <CardGroup className="h-100">
            <Card>
              <Card.Body>
                <Excerpt url={url} title={title} excerpt={excerpt} />
              </Card.Body>
              <Card.Footer className="b-0 mt-auto">
                <Tags tags={tags} />
                <Author
                  author={author}
                  author_image={author_image}
                  date={date}
                  url={url}
                  info={read}
                />
              </Card.Footer>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </div>
  </Col>
)
