import React from 'react'
import { Helmet } from 'react-helmet'

export default ({ url, name = null, type, title, description, image, locale }) => (
  <Helmet>
    {name && <meta property="og:site_name" content={name} />}
    <meta property="og:locale" content={locale || `en_US`} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:image:alt" content={title} />
    <meta property="og:image:secure_url" content={image} />    
  </Helmet>
)
