import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import useConefacts from '../hooks/use-conefacts';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Conefact from '../components/conefact';

const getRandomFact = (conefacts, currentFact) => {
  const randomFact = conefacts[Math.floor(Math.random() * conefacts.length)];
  if (randomFact !== currentFact) {
    return randomFact;
  }
  return getRandomFact(conefacts, currentFact);
};

const IndexPage = () => {
  const conefacts = useConefacts();
  const [currentFact, setCurrentFact] = useState(getRandomFact(conefacts));

  return (
    <Layout>
      <SEO title="Cone Facts" />
      <Conefact conefact={currentFact} />
      <div
        style={{
          margin: '1rem',
        }}
      >
        <Fab
          variant="extended"
          color="primary"
          onClick={() => setCurrentFact(getRandomFact(conefacts, currentFact))}
        >
          <span style={{ fontWeight: 600 }}>discover another #conefact</span>
        </Fab>
      </div>
    </Layout>
  );
};

export default IndexPage;
