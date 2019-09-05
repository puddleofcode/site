import React from 'react'
import { Card, Col } from 'react-bootstrap';
//import BackgroundImage Image rom 'gatsby-background-image'
import Image from 'gatsby-image'

import Link from './link'

import Author from './author'
import Excerpt from './excerpt'
import Tags from './tags'

export default ({ title, excerpt, author, date, url, image, author_image, tags, read }) => (
  <Col lg={4} md={6} className="mb-30px card-group">
    <Card className="h-100">
      <div className="maxthumb">
        <Link to={url}>
          <Image className="maxthumb-img" fluid={image.childImageSharp.fluid} />
        </Link>
      </div>
      <Card.Body>
        <Excerpt url={url} title={title} excerpt={excerpt} />
      </Card.Body>
      <Card.Footer className="bg-white">
        <Tags tags={tags} />
        <Author author={author} author_image={author_image} date={date} url={url} info={read} />
      </Card.Footer>
    </Card>
  </Col>
)
