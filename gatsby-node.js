/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const { paginate } = require('gatsby-awesome-pagination');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark` && node.frontmatter.section == `story`) {
    const slug = `/${node.frontmatter.section}/${node.frontmatter.slug}`
    console.info("Generating slug:", slug)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const sectionAction = {
    'til': (edges) => {
      paginate({
        createPage,
        items: edges,
        itemsPerPage: 5,
        pathPrefix: `/tils`,
        component: path.resolve(`src/pagination/tils.js`),
      })
    },
    'project': (edges) => {
      paginate({
        createPage,
        items: edges,
        itemsPerPage: 8,
        pathPrefix: `/projects`,
        component: path.resolve(`src/pagination/projects.js`),
      })
    },
    'story': (edges) => {
      paginate({
        createPage,
        items: edges,
        itemsPerPage: 9,
        pathPrefix: `/stories`,
        component: path.resolve(`src/pagination/stories.js`),
      })
      edges.forEach(({ node }, index) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`src/sections/story.js`),
          context: {
            slug: node.fields.slug,
            navigation: {
              prev: index === 0 ? null : { title: edges[index - 1].node.frontmatter.title, slug: edges[index - 1].node.fields.slug },
              next: index === edges.length - 1 ? null : { title: edges[index + 1].node.frontmatter.title, slug: edges[index + 1].node.fields.slug },
            }
          }
        })
      })
    }
  }
  return new Promise((resolve, _reject) => {
    graphql(`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date]}
        ){
          group(field: frontmatter___section) {
            name: fieldValue
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.group.forEach(({ name, edges }) => (
        (sectionAction[name] || (() => null))(edges)
      ))
      resolve()
    })
  })
}
