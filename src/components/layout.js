import React from 'react'
import { Container } from 'react-bootstrap'

import Navigation from './navigation'
import Footer from './footer'

import Prism from 'prismjs'

class Layout extends React.Component {
  componentDidMount() {
    var elements = document.getElementsByTagName('code')
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].className.match(/language-/)) {
        elements[i].classList.add('line-numbers')
      }
    }
    Prism.highlightAll()
  }
  render() {
    return (
      <>
        <Navigation />
        <div className="site-content">
          <Container>
            <div className="main-content">{this.props.children}</div>
          </Container>
        </div>
        <Footer />
      </>
    )
  }
}

export default Layout
