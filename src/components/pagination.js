import React from 'react'
import { Link } from 'gatsby'

const linkable = (cond, link, text) => {
  if (cond) {
    return (
      <Link
        key={text}
        className="ml-1 mr-1"
        to={link}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    )
  } else {
    return (
      <span
        key={text}
        className="ml-1 mr-1"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    )
  }
}

export default ({ prefix, pageContext }) => (
  <div className="bottompagination">
    <div className="pointerup">
      <i className="fa fa-caret-up"></i>
    </div>
    <span className="navigation" role="navigation">
      <div className="pagination">
        {linkable(
          pageContext.previousPagePath,
          pageContext.previousPagePath,
          '&laquo; Prev'
        )}

        {Array.from({ length: pageContext.numberOfPages }, (x, i) => {
          if (i === 0) {
            return linkable(i !== pageContext.pageNumber, `/${prefix}`, i + 1)
          } else {
            return linkable(
              i !== pageContext.pageNumber,
              `/${prefix}/${i + 1}`,
              i + 1
            )
          }
        })}

        {linkable(
          pageContext.nextPagePath,
          pageContext.nextPagePath,
          'Next &raquo'
        )}
      </div>
    </span>
  </div>
)
