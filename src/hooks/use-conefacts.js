import { graphql, useStaticQuery } from 'gatsby'

const useConefacts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            internal {
              content
            }
            id
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark.edges.map(conefact => ({
    title: conefact.node.frontmatter.title,
    content: conefact.node.internal.content,
    id: conefact.node.id,
  }))
}

export default useConefacts
