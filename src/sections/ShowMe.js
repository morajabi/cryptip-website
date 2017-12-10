import React from 'react'
import styled, { css } from 'styled-components'

import { rem } from '../utils/rem'
import Container from '../components/Container'
import Calculator from '../components/Calculator'
import { Doggy } from '../components/Icons'

const ShowMe = () => (
  <Wrapper>
    <Container>

      <Title>Show me first! <Doggy /></Title>
      <Desc>I just need two numbers to start calculating. Let's do this:</Desc>

      <Calculator />

    </Container>
  </Wrapper>
)

export default ShowMe

const Wrapper = styled.section`
  width: 100%;
  padding-top: ${p => p.theme.sizes.big140};
  text-align: center;
  color: ${p => p.theme.colours.primary};
`

const Title = styled.h2`
  font-size: ${p => p.theme.sizes.fontHeading1};
  vertical-align: middle;

  svg {
    vertical-align: ${rem(-5)};
    margin-left: ${rem(5)};
  }
`

const Desc = styled.p`
  font-size: ${p => p.theme.sizes.fontMedium};
  margin-bottom: ${p => p.theme.sizes.medium60};

  svg {
    vertical-align: ${rem(-5)};
    margin-left: ${rem(5)};
  }
`
