import * as React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'

import { BASE_FONT_SIZE, rem } from '../utils/rem'
import { theme } from '../utils/theme'

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title="Cryptip - Start your bitcoin hobby to profit"
        meta={[
          { name: 'description', content: 'Get a plan and a realtime estimate of your profit in Bitcoin' },
          { name: 'keywords', content: 'Bitcoin, price, invest, profit, cryptocurrency, when to invest' },
        ]}
      >
        <link href="https://fonts.googleapis.com/css?family=Baloo|PT+Sans" rel="stylesheet" />
      </Helmet>

      {children()}
    </div>
  </ThemeProvider>
)

export default TemplateWrapper

injectGlobal`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: ${BASE_FONT_SIZE}px;
  }

  body {
    box-sizing: border-box;
    font-family: ${theme.fonts.body};
    font-weight: 400;
    font-size: ${theme.sizes.fontNormalPx};
    line-height: 1.3;
    letter-spacing: 1px;
    color: ${theme.colours.primary};

    -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.heading};
    letter-spacing: 0.2px;
  }

  b,
  strong,
  button {
    font-family: ${theme.fonts.buttons};
  }
`
