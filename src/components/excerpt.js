import React from 'react'
import { Card } from 'react-bootstrap';
import Link from './link'

export default ({url, title, excerpt}) => (
  <>
    <Card.Title as="h2">
      <Link className="text-dark" to={url}>
        {title}
      </Link>
    </Card.Title>
    <Card.Text as="h4" dangerouslySetInnerHTML={{__html: excerpt}}/>
  </>
)
