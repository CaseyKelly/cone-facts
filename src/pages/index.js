import React from 'react'
import useConefacts from '../hooks/use-conefacts'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Conefact from '../components/conefact'
import Button from '@material-ui/core/Button'

const IndexPage = () => {
  const conefacts = useConefacts()
  return (
    <Layout>
      <SEO title="Cone Facts" />
      {conefacts.map(conefact => (
        <Conefact conefact={conefact} key={conefact.id} />
      ))}
      <div style={{ margin: '1rem' }}>
        <Button variant="contained" component="span">
          get another #conefact
        </Button>
      </div>
    </Layout>
  )
}

export default IndexPage
