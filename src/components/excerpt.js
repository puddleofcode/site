import React from 'react'
import { Card } from 'react-bootstrap'
import Link from './link'

export default ({ url, title, excerpt }) => (
  <>
    <Card.Title as="h3">
      <Link to={url}>{title}</Link>
    </Card.Title>
    <Card.Text as="div" dangerouslySetInnerHTML={{ __html: excerpt }} />
  </>
)
