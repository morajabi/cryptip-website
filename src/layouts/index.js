import * as React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled, { injectGlobal } from 'styled-components'

import { BASE_FONT_SIZE, rem } from '../utils/rem'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Cryptip - Start your bitcoin hobby to profit"
      meta={[
        { name: 'description', content: 'Get a plan and a realtime estimate of your profit in Bitcoin' },
        { name: 'keywords', content: 'Bitcoin, price, invest, profit, cryptocurrency, when to invest' },
      ]}
    />

    {children()}
  </div>
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
  }

  body {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    line-height: 1.7;
    color: #374047;
  }
`
