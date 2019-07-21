import React from 'react'
import Link from './link'

export default ({ tags }) => (
  <ul className="tags mb-4">
    {(tags || []).map((tag) => (
      <li key={tag}>
        <Link>
          {tag}
        </Link>
      </li>
    ))}
  </ul>
)
