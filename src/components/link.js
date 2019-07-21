import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from "gatsby-plugin-google-gtag"

export default ({ children, to, ...props }) => (
  to ? (to.startsWith("http") ? (<OutboundLink href={to} {...props}>{children}</OutboundLink>) : (<Link to={to} {...props}>{children}</Link>))
    : (<span {...props}>{children}</span>)
)
