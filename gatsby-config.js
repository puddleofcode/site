module.exports = {
  siteMetadata: {
    title: `Puddle Of Code`,
    author: `Michał Kalbarczyk`,
    titleTemplate: `%s · Puddle Of Code`,
    description: `Programming Adventures with Michał Kalbarczyk`,
    url: `https://puddleofcode.com`,
    image: `./src/images/logo.png`,
    twitterUsername: `@fazibear`,
    facebookAppID: ``
  },
  plugins: [
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `fazibear`
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`UA-627863-17`],
        pluginConfig: {
          head: false
        },
        gtagConfig: {
          anonymize: true
        }
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        appName: `Puddle Of Code`,
        appDescription: `Programming Adventures with Michał Kalbarczyk`,
        logo: "./src/images/favicon.png"
      }
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 780,
              linkImagesToOriginal: false
            }
          },
          `gatsby-remark-images-medium-zoom`,
          // {
          //   resolve: `gatsby-remark-prismjs`,
          //   options: {
          //     classPrefix: "language-",
          //     inlineCodeMarker: "`",
          //     showLineNumbers: true,
          //     aliases: {
          //       sh: "bash",
          //       slim: "coffee",
          //       qml: "javascript"
          //     },
          //   }
          // },
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              // defaults to false
              usePrefix: false,
              providers: {
                include: ["YouTube"]
              }
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/cms/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `stories`,
        path: `${__dirname}/cms/stories`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `companies`,
        path: `${__dirname}/cms/companies`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tils`,
        path: `${__dirname}/cms/tils`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/cms/projects`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Fira Sans', 'Fira Mono']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
        query: `
        {
          site {
            siteMetadata {
              siteUrl: url
            }
          }
        }
        `
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl: url
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            }
          })
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        // graphQL query to get siteMetadata
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl: url
                site_url: url,
                author
              }
            }
          }
        `,
        feeds: [
          // an array of feeds, I just have one below
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              const { siteMetadata: { siteUrl } } = site;
              return allMarkdownRemark.edges.map(edge => {
                const {
                  node: {
                    fields: {
                      slug
                    },
                    frontmatter: {
                      title,
                      date,
                      tags,
                      author
                    },
                    excerpt,
                    html
                  }
                } = edge;
                return Object.assign({}, edge.node.frontmatter, {
                  language: `en-us`,
                  title,
                  description: excerpt,
                  date,
                  url: siteUrl + slug,
                  guid: siteUrl + slug,
                  author: author,
                  // image: {
                  //   url: siteUrl + publicURL,
                  //   title: featuredAlt,
                  //   link: siteUrl + path,
                  // },
                  custom_elements: [{ "content:encoded": html }],
                })
              })
            },
            // query to get blog post data
            query: `
            {
              allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date]}
                filter: {frontmatter: {section: {eq: "story"}}}
              ){
                edges {
                  node {
                    id
                    excerpt(pruneLength: 100, format: PLAIN, truncate: false)
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      section
                      title
                      date
                      tags
                      author
                    }
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: `Puddle Of Code · RSS Feed`,
          },
        ],
      },
    },
  ],
}
