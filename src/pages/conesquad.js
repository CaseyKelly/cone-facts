import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <h1>🚀 the #conesquad 🚀</h1>
    <div style={{ height: '500px' }}>
      <Img fluid={data.file.childImageSharp.fluid} />
    </div>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "conesquad.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
