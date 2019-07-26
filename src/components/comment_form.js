import React from 'react'
//import BackgroundImage Image rom 'gatsby-background-image'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

export default ({ title, slug }) => (
  <>
    <h3>{title}</h3>
    <form
      method="POST"
      action="https://dev.staticman.net/v3/entry/github/fazibear/puddleofcode.com"
    >
      <input
        name="options[slug]"
        type="hidden"
        value={slug}
      />
      <input name="fields[name]" type="text" placeholder="Name" required />
      <input
        name="fields[email]"
        type="email"
        placeholder="Email"
        required
      />
      <textarea name="fields[message]" placeholder="Comment" required />
      <button type="submit">Submit Comment</button>
    </form>
  </>
)
