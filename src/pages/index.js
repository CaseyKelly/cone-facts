import React, { useState } from 'react'
import useConefacts from '../hooks/use-conefacts'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Conefact from '../components/conefact'
import Button from '@material-ui/core/Button'

const getRandomFact = (conefacts, currentFact) => {
  const randomFact = conefacts[Math.floor(Math.random() * conefacts.length)]
  if (randomFact !== currentFact) {
    return randomFact
  }
  getRandomFact(conefacts, currentFact)
}

const IndexPage = () => {
  const conefacts = useConefacts()
  const [currentFact, setCurrentFact] = useState(getRandomFact(conefacts))

  return (
    <Layout>
      <SEO title="Cone Facts" />
      <Conefact conefact={currentFact} />
      <div style={{ margin: '1rem' }}>
        <Button
          variant="contained"
          component="span"
          onClick={() => setCurrentFact(getRandomFact(conefacts, currentFact))}
        >
          get another #conefact
        </Button>
      </div>
    </Layout>
  )
}

export default IndexPage
