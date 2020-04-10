import React from 'react'
//import BackgroundImage Image rom 'gatsby-background-image'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

export default ({ author, author_image, date, url, info }) => (
  <div className="wrapfooter">
    <span className="meta-footer-thumb">
      <Image
        fadeIn={false}
        className="author-thumb"
        fixed={author_image.childImageSharp.fixed}
        title={author}
      />
    </span>
    <span className="author-meta">
      <Link to="/about">{author}</Link>
      <br />
      {date && <span className="post-date">{date} </span>}
      {date && info && <span className="post-date">&nbsp;-&nbsp;</span>}
      {info ? <span className="post-date">{info}</span> : <span>&nbsp;</span>}
    </span>
    <div className="clearfix"></div>
  </div>
)
// <span className="post-read-more">
//   <Link to={url} title="Read Story">
//     <svg className="svgIcon-use" width="25" height="25" viewBox="0 0 25 25">
//       <path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fillRule="evenodd">
//       </path>
//     </svg>
//   </Link>
// </span>
