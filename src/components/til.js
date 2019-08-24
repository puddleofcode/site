import React from 'react'
//import BackgroundImage Image rom 'gatsby-background-image'
import Image from 'gatsby-image'
import Link from '../components/link'

export default ({ html, title, author, author_image, url }) => (
  <div className="til">
    <Link className="text-dark" to={url}>
      <Image fadeIn={false} className="author-thumb" fixed={author_image.childImageSharp.fixed} title={author} />
      <h1>{title}</h1>
    </Link>
    <div className="article-post" dangerouslySetInnerHTML={{ __html: html }} />
  </div>
)
