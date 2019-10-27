import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import styled from 'styled-components';
import useConefacts from '../hooks/use-conefacts';
import SEO from '../components/seo';
import Conefact from '../components/conefact';

const ButtonWrapper = styled('div')`
  margin: 1rem;
`;

const IndexPage = () => {
  const conefacts = useConefacts();
  const [currentFact, setCurrentFact] = useState(0);

  const getRandomFact = () => {
    if (currentFact + 1 >= conefacts.length) {
      setCurrentFact(0);
    } else {
      setCurrentFact(currentFact + 1);
    }
    return conefacts[currentFact];
  };

  return (
    <>
      <SEO title="Cone Facts" />
      <Conefact conefact={conefacts[currentFact]} />
      <ButtonWrapper>
        <Fab variant="extended" color="primary" onClick={() => getRandomFact()}>
          <span style={{ fontWeight: 600 }}>discover another #conefact</span>
        </Fab>
      </ButtonWrapper>
    </>
  );
};

export default IndexPage;
