import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';

const Wrapper = styled('div')`
  margin: 0 auto;
  max-width: 70vw;
  min-height: 250px;
`;

const ContentWrapper = styled('div')`
  padding: 1rem;
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
