import React from 'react'
//import BackgroundImage Image rom 'gatsby-background-image'
import Image from 'gatsby-image'

export default ({ html, title, author, author_image }) => (
  <div className="til">
    <Image fadeIn={false} className="author-thumb" fixed={author_image.childImageSharp.fixed} title={author} />
    <h1>{title}</h1>
    <div className="article-post" dangerouslySetInnerHTML={{ __html: html }} />
  </div>
)
