import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { fadeIn } from 'react-animations'

const fadeInAnimation = keyframes`${fadeIn}`

const ImageBackground = styled(BackgroundImage)`
  background-position: top 40% center;
  background-size: cover;
  height: 45vh;

  /* override the default margin for sibling elements  */
  + * {
    margin-top: 0;
  }
`

const TextBox = styled('div')`
  /* background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00); */
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0 5vw 2rem;
  width: 100%;
  color: white;
  background-image: linear-gradient(to top, #dbd0c9, #ddbbff00);

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 4rem;
    animation: 1.5s ${fadeInAnimation};
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "pinecone.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <ImageBackground
      Tag="section"
      fluid={data.placeholderImage.childImageSharp.fluid}
      fadeIn="soft"
    >
      <TextBox>
        <h1>#conefacts</h1>
      </TextBox>
    </ImageBackground>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
