import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logoWithCrown from '../assets/logo-with-crown.jpg'
import logoWithCrownX2 from '../assets/logo-with-crown@2x.jpg'
import { rem } from '../utils/rem'
import Container from '../components/Container'

const IndexPage = () => (
  <div>

    <HeroWrapper>
      <Container>
        <Logo><img src={logoWithCrown} alt="Cryptip" /></Logo>
      </Container>
    </HeroWrapper>


  </div>
)

export default IndexPage

const HeroWrapper = styled.section`
  width: 100%;
  padding-top: ${rem(80)};
  text-align: center;
`

const Logo = styled.div`
  background: url(${logoWithCrown}) no-repeat;
  width: ${rem(160)};
  height: ${rem(51)};
  text-indent: -99999px;

  img {
    opacity: 0.01;
    width: 1px;
  }
`
