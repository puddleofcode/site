import React from 'react'

import { FaFacebook, FaTwitter, FaLinkedin, FaReddit } from 'react-icons/fa';
import { graphql, StaticQuery } from 'gatsby'
import { CommentCount } from 'gatsby-plugin-disqus'

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
} from 'react-share';

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl: url
      }
    }
  }
`
var render = ({ title, url, tags }) => (
  <div className="share">
    <p>
      Share
      </p>
    <ul>
      <li className="ml-1 mr-1">
        <FacebookShareButton
          url={url}>
          <FaFacebook size={30} />
        </FacebookShareButton>
      </li>
      <li className="ml-1 mr-1">
        <TwitterShareButton
          url={url}
          title={title}
          via="fazibear"
          hashtags={tags}
        >
          <FaTwitter size={30} />
        </TwitterShareButton>
      </li>
      <li className="ml-1 mr-1">
        <LinkedinShareButton
          url={url}
          title={title}
        >
          <FaLinkedin size={30} />
        </LinkedinShareButton>
      </li>
      <li className="ml-1 mr-1">
        <RedditShareButton
          url={url}
          title={title}
        >
          <FaReddit size={30} />
        </RedditShareButton>
      </li>
    </ul>
    <div className="sep" />
    <ul>
      <li>
        <CommentCount config={{url: url}} placeholder={`0 Comments`} />
      </li>
    </ul>
  </div>
)

export default ({ title, url, tags }) => (
  <StaticQuery query={query} render={(query) => render({ title, url: `${query.site.siteMetadata.siteUrl}${url}`, tags })} />
)
