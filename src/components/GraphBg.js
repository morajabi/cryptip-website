import React from 'react'
import img from '../assets/bg-graph.svg'

const GraphBg = props => (
  <img
    {...props}
    style={{ userSelect: 'none' }}
    src={img}
  />
)

export default GraphBg
