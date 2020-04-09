import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'
import Twitter from './twitter'
import OpenGraph from './opengraph'
import SchemaOrg from './schemaorg'

export const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        defaultAuthor: author
        titleTemplate
        defaultDescription: description
        siteUrl: url
        twitterUsername
        facebookAppID
      }
    }
    logo: file(relativePath: {eq: "logo.png"}) {
      publicURL
    }
  }
`
export default ({
  title = null,
  description = null,
  image = null,
  article = false,
  date = null,
  author = null,
  url = null
}) => (
    <StaticQuery
      query={query}
      render={
        ({
          site: {
            siteMetadata: {
              defaultTitle,
              defaultAuthor,
              titleTemplate,
              defaultDescription,
              siteUrl,
              twitterUsername,
              facebookAppID,
            },
          },
          logo: {
            publicURL
          }
        }) => {
          const seo = {
            title: title || defaultTitle,
            author: author || defaultAuthor,
            description: description || defaultDescription,
            image: `${siteUrl}${image || publicURL}`,
            url: `${siteUrl}${url || '/'}`,
          };

          return (
            <>
              <Helmet title={seo.title} titleTemplate={titleTemplate} htmlAttributes={{ lang: `en` }}>
                <meta name="author" content={seo.author} />
                <meta name="description" content={seo.description} />
                <meta name="image" content={seo.image} />
                <link rel="canonical" href={seo.url} />
                <link rel="alternate" hreflang="en" href={seo.url} />
              </Helmet>
              <OpenGraph
                url={seo.url}
                type={article ? `article` : `website`}
                title={seo.title}
                description={seo.description}
                image={seo.image}
                appID={facebookAppID}
                name={defaultTitle}
              />
              <Twitter
                username={twitterUsername}
                title={seo.title}
                description={seo.description}
                image={seo.image}
              />
              <SchemaOrg
                isBlogPost={article}
                url={seo.url}
                title={seo.title}
                image={seo.image}
                description={seo.description}
                datePublished={date}
                canonicalUrl={seo.url}
                author={seo.author}
                organization={{}}
                defaultTitle={seo.title}
              />
            </>
          );
        }}
    />
  );
