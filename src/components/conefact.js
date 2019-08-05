import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'

const Wrapper = styled('div')`
  margin: 0 auto;
  max-width: 70vw;
`

const ContentWrapper = styled('div')`
  padding: 1rem;
`

const Conefact = ({ conefact }) => (
  <Wrapper>
    <Card>
      <ContentWrapper>
        <h3>{conefact.title}</h3>
        <p>{conefact.content}</p>
      </ContentWrapper>
    </Card>
  </Wrapper>
)

export default Conefact
