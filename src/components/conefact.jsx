import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import ConeIconSrc from '../images/coneicon.png';

const Wrapper = styled('div')`
  margin: 0 auto;
  min-height: 250px;
  max-width: 80vw;

  @media (max-width: 768px) {
    max-width: 90vw;
  }
`;

const ContentWrapper = styled('div')`
  padding: 1rem;
  min-height: 220px;

  @media (max-width: 768px) {
    min-height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;
  }
`;

const Title = styled('h3')`
  font-weight: 800;
  text-decoration: underline;
`;

const Content = styled('p')`
  margin: 0;
`;

const ConeIcon = styled('img')`
  margin-bottom: 0.5rem;
`;

const Conefact = ({ conefact }) => (
  <Wrapper>
    <Card>
      <ContentWrapper>
        <Title>{conefact.title}</Title>
        <Content>{conefact.content}</Content>
      </ContentWrapper>
      <ConeIcon src={ConeIconSrc} height="30px" />
    </Card>
  </Wrapper>
);

Conefact.propTypes = {
  conefact: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Conefact;
