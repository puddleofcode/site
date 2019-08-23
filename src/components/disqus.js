import React from 'react'

import { graphql, StaticQuery } from 'gatsby'
import Disqus from 'gatsby-plugin-disqus'

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl: url
      }
    }
  }
`
var render = (config) => (
  <Disqus config={config} />
)

export default ({ identifier, title, url }) => (
  <StaticQuery query={query} render={(query) => render({ identifier, title, url: `${query.site.siteMetadata.siteUrl}${url}` })} />
)

