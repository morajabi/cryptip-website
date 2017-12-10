import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { darken } from 'polished'

import { rem } from '../utils/rem'

export const NormalButton = styled.button`
  display: inline-block;
  padding: ${rem(11)} ${rem(20)};
  box-sizing: border-box;

  font-family: ${p => p.theme.fonts.buttons};
  font-size: ${p => p.theme.sizes.fontNormal};
  line-height: 1;

  cursor: pointer;
  border: none;
  outline: none;
  user-select: none;

  border-radius: 0;
  color: ${p => p.theme.colours.primary};
  background: ${p => p.theme.colours.lightBlue};
  transition: background 200ms, transform 200ms ease-out;

  ${p => p.theme.mixins.uppercase}

  &:hover {
    background: ${p => darken(0.07, p.theme.colours.lightBlue)};
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    box-shadow: 0 0 0 3px ${p => darken(-0.2, p.theme.colours.primary)};
  }
`

export const LinkButton = NormalButton.withComponent(Link).extend`
  text-decoration: none;
`

export const BigButton = NormalButton.extend`
  padding: ${rem(13)} ${rem(24)};

  font-size: ${p => p.theme.sizes.fontMedium};
  text-transform: none;
  letter-spacing: 0.8px;
`
