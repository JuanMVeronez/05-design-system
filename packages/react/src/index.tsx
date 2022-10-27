import React from 'react'
import { styled } from './styles'

const Button = styled('button', {
  color: '$ignite300',
})

const Home: React.FC = () => <Button>Hello World</Button>

export default Home
