import React from 'react'

export default ({ title, lead }) => (
  <div className="titleheading">
    <h1 className="sitetitle">
      {title}
    </h1>
    <p className="lead">
      {lead}
    </p>
  </div>
)
