import React from 'react'
// import { bool, shape, string } from 'prop-types'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

// Configs
import { MAGENTO_BACKEND_URL } from '../../configs'

// CSS Modules
import greetingClasses from './greeting.module.css'

// Components

const GreetingPage = () => {
  const { who = 'nobody' } = useParams()

  return (
    <div className="content">
      <Title>Hello, {who}!</Title>
      <h1 className={greetingClasses.wave}>{'\uD83D\uDC4B'}</h1>
      <h3>Config: {MAGENTO_BACKEND_URL}</h3>
    </div>
  )
}

// Prop Types
GreetingPage.propTypes = {}

// Styled-Components
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

export default GreetingPage
