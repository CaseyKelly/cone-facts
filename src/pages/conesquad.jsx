import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';

const Conesquad = ({ data }) => (
  <Layout>
    <h1>
      <span role="img" aria-label="rocket ship">
        🚀
      </span>
      the #conesquad
      <span role="img" aria-label="rocket ship">
        🚀
      </span>
    </h1>
    <div style={{ height: '500px' }}>
      <Img fluid={data.file.childImageSharp.fluid} />
    </div>
  </Layout>
);

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
`;

Conesquad.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Conesquad;
