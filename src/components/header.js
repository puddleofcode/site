import React from 'react'
import { Link } from 'gatsby'

export default ({ title, link, url }) => (
  <div className="section-title">
    <h2>
      <span>{title}</span>
      {link && url && (
        <div className="more">
          <Link to={url}>{link}</Link>
        </div>
      )}
    </h2>
  </div>
)
