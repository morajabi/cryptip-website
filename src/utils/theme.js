import { css } from 'styled-components'
import { rem } from './rem'

export const sizes = {
  tiny6: rem(6),
  small10: rem(10),
  small16: rem(16),
  medium20: rem(20),
  medium45: rem(45),
  medium60: rem(60),
  big140: rem(140),

  fontTiny: rem(14),
  fontSmall: rem(16),
  fontNormal: rem(18),
  fontNormalPx: '18px',
  fontMedium: rem(24),
  fontHeading1: rem(45),
  fontHeading2: rem(35),

  radiusNormal: rem(3),
}

export const colours = {
  primary: '#6C7A89',
  secondary: '#EFC000', // orange

  lightGreenBlue: '#F1F4F8',
  lightPrimaryText: 'rgba(108, 122, 137, 0.6)',
  lightBlue: '#E8EAEC',
}

export const fonts = {
  body: `'PT Sans', sans-serif`,
  heading: `'Baloo', cursive;`,
  buttons: `'Baloo', sans-serif`,
}

// prettier-ignore
export const mixins = {
  uppercase: css`
    text-transform: uppercase;
    letter-spacing: 2px;
  `,
}

export const theme = {
  sizes,
  colours,
  fonts,
  mixins,
}
