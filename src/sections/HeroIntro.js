import React from 'react'
import styled, { css } from 'styled-components'
import { retinaImage } from 'polished'

import { rem } from '../utils/rem'
import Container from '../components/Container'
import GraphBg from '../components/GraphBg'
import { LinkButton } from '../components/Button'

import logoWithCrown from '../assets/logo-with-crown.jpg'
import logoWithCrownX2 from '../assets/logo-with-crown@2x.jpg'

const HeroIntro = () => (
  <Wrapper>
    <GraphBgPositioned pos="left" />
    <GraphBgPositioned pos="right" />

    <Container style={{ position: 'relative' }}>
      <Logo><img src={logoWithCrown} alt="Cryptip" /></Logo>
      <Slogan>Get your realtime plan<br />and start your crypto hobby!</Slogan>
      <LinkButton to="#2">What’s that?</LinkButton>
    </Container>
  </Wrapper>
)

export default HeroIntro

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: ${rem(80)};
  padding-bottom: ${p => p.theme.sizes.big140};
  text-align: center;
`

const retinaLogo = retinaImage(
  logoWithCrown.replace('.jpg', ''),
  'contain',
  undefined,
  logoWithCrownX2.replace('.jpg', ''),
)

const Logo = styled.div`
  width: ${rem(160)};
  height: ${rem(51)};
  display: inline-block;
  text-indent: -99999px;

  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${logoWithCrown});

  @media only screen and (-webkit-min-device-pixel-ratio: 1.3),
    (min--moz-device-pixel-ratio: 1.3),
    (-o-min-device-pixel-ratio: 1.3/1),
    (min-resolution: 144dpi),
    (min-resolution: 1.5dppx) {
    background-image: url(${logoWithCrownX2});
   }

  img {
    opacity: 0.01;
    width: 1px;
  }
`

const Slogan = styled.div`
  margin-top: ${p => p.theme.sizes.small16};
  margin-bottom: ${p => p.theme.sizes.medium45};
  font-size: ${rem(24)};
`

const GraphBgPositioned = styled(GraphBg)`
  position: absolute;
  top: -321px;

  ${p => p.pos === 'left' ? css`
    left: -53px;
    transform: scale(0.9) rotateZ(69deg) rotateX(180deg);
  ` : css`
    right: -50px;
    transform: scale(0.9) rotateZ(49deg);
  `}
`
