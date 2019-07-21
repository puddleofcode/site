import React from 'react'
import Helmet from 'react-helmet'

export default ({ type = 'summary_large_image', username = null, title, description, image }) => (
  <Helmet>
    {username && <meta name="twitter:creator" content={username} />}
    <meta name="twitter:card" content={type} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:image:alt" content={description} />
  </Helmet>
)