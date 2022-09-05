import { useState } from 'react'
import styled from 'styled-components'

const AppContainer = styled.div`
  font-size: 3rem;
  margin: auto;
  max-width: 800px;
  margin-top: 20px;
`

const AppButton = styled.button`
  font-size: 2rem;
  padding: 1rem 2rem;
`

export const App = () => {
  const [count, setCount] = useState<number>(0)

  const counter = () => {
    setCount(count + 1)
  }

  return (
    <AppContainer>
      <h1>Name: base-boilerplate</h1>
      <AppButton onClick={counter}>counter: {count}</AppButton>
    </AppContainer>
  )
}
