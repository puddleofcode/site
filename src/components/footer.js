import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default () => (
  <footer className="footer">
    <Container>
      <Row>
        <Col md={6} sm={6} className="text-center text-lg-left">
          All content © Michał Kalbarczyk
        </Col>
        <Col md={6} sm={6} className="text-center text-lg-right">
          theme based on{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.wowthemes.net"
          >
            mediumish theme
          </a>
        </Col>
      </Row>
    </Container>
  </footer>
)
