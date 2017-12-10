import React from 'react'
import styled, { css } from 'styled-components'

import { rem } from '../utils/rem'
import Container from '../components/Container'
import { Write, DottedLine, Bitcoin, Party, PartyParticles } from '../components/Icons'

const HowItWorks = () => (
  <Wrapper>
    <Container>

      <Step>
        <IconWrapper><Write /></IconWrapper>
        <Title>We give you a profit plan</Title>
        <Desc>Based on how much you want to invest and data calculations we give you a real time estimate of your profit.</Desc>
        <DottedLineWrapper>
          <DottedLine />
        </DottedLineWrapper>
      </Step>

      <Step>
        <IconWrapper small><Bitcoin /></IconWrapper>
        <Title small>Then go and buy BTC</Title>
        <Desc small>A safe place to buy is coinbase.com, after that you keep ‘em in a trusted wallet</Desc>
        <DottedLineWrapper>
          <DottedLine />
        </DottedLineWrapper>
      </Step>

      <Step>
        <IconWrapper small><Party /></IconWrapper>
        <Title small partyStyle>
          That’s all!
          <ParticlesWrapper><PartyParticles /></ParticlesWrapper>
        </Title>
        <Desc small>Now act based on the plan so you’ll save the initial capital and enjoy the profit</Desc>
      </Step>


    </Container>
  </Wrapper>
)

export default HowItWorks

const Wrapper = styled.section`
  width: 100%;
  padding-bottom: ${p => p.theme.sizes.medium45};
  text-align: center;
`

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const IconWrapper = styled.div`
  text-align: center;
  margin-bottom: ${p => p.small ? p.theme.sizes.tiny6 : p.theme.sizes.small10};
`

const Title = styled.h3`
  font-size: ${p => p.small ? p.theme.sizes.fontHeading2 : p.theme.sizes.fontHeading1};

  ${p => p.partyStyle && css`
    position: relative;
    color: ${p.theme.colours.secondary};
  `}
`

const ParticlesWrapper = styled.span`
  position: absolute;
  top: ${rem(-23)};
  right: ${rem(-16)};
`

const Desc = styled.p`
  max-width: ${p => p.small ? rem(380) : rem(490)};
  font-size: ${p => p.small ? p.theme.sizes.fontNormal : p.theme.sizes.fontMedium};
  margin-top: ${p => p.theme.sizes.tiny6};
`

const DottedLineWrapper = styled.div`
  margin-top: ${p => p.theme.sizes.medium20};
  margin-bottom: ${p => p.theme.sizes.small10};
`
