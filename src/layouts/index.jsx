/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { swing } from 'react-animations';

import Header from '../components/header';
import '../components/layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const Container = styled('div')`
    margin: 0 auto auto;
  `;

  const Main = styled('main')`
    display: flex;
    flex-direction: column;
    text-align: center;
  `;

  const Footer = styled('footer')`
    font-weight: 500;
    font-size: 1.2rem;
    height: 5vh;
    background-color: rgb(167 149 143);
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 0.5rem 1rem;
    text-align: center;
    -moz-box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.15);
  `;

  const bounceAnimation = keyframes`${swing}`;

  const SparkleDiv = styled.div`
    animation: 1s ${bounceAnimation};
    animation-iteration-count: infinite;
    display: inline-block;
  `;

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
        <Main>{children}</Main>
        <Footer>
          <SparkleDiv>
            <span role="img" aria-label="sparkle">
              ✨
            </span>
          </SparkleDiv>
          {'© '}
          {new Date().getFullYear()}
          {' conefacts '}
          <SparkleDiv>
            <span role="img" aria-label="sparkle">
              ✨
            </span>
          </SparkleDiv>
        </Footer>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
