import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';

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
  @media (max-width: 768px) {
    min-height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Conefact = ({ conefact }) => (
  <Wrapper>
    <Card>
      <ContentWrapper>
        <h3>{conefact.title}</h3>
        <p>{conefact.content}</p>
      </ContentWrapper>
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
