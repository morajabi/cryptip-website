import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { darken } from 'polished'
import VisibilitySensor from 'react-visibility-sensor'

import { rem } from '../utils/rem'
import Container from '../components/Container'
import { BigButton } from '../components/Button'
import { Doggy, Refresh } from '../components/Icons'

const basisPeriods = [
  '1 month',
  '3 month',
  '2 weeks',
]

const defaultSelectedBasicIndex = 0
const basisPeriodsLastIndex = basisPeriods.length - 1

class Calculator extends React.Component {
  state = {
    capital: 100,
    basisPeriodIndex: defaultSelectedBasicIndex,
    basisPeriodValue: basisPeriods[defaultSelectedBasicIndex],
    showInputHint: false,
    showInputHintSensorActive: true,
  }

  componentDidMount() {

  }

  render() {
    const {
      capital,
      basisPeriodValue,
      showInputHint,
      showInputHintSensorActive,
    } = this.state

    return (
      <div>
        <PromptText>
          I have about

          <VisibilitySensor
            offset={{ bottom: 100 }}
            active={showInputHintSensorActive}
            onChange={this.visibilityChanged}
          >
            <CapitalArea>
              <CapitalInput
                style={{ width: String(capital).length * 18 + 43 }}
                value={`$` + capital}
                onChange={this.capitalChanged}
              />
              <CapitalHint
                onClick={this.hideHint}
                isVisible={showInputHint}>
                Type in here 👇
              </CapitalHint>
            </CapitalArea>
          </VisibilitySensor>

          to put into bitcoins and<br />
          I want to claim my profit every{' '}

          <BasisSelector
            onClick={this.basisSelectorClicked}
            onKeyDown={this.basisSelectorKeyDowned}
          >
            {basisPeriodValue}{' '}
            <BasisIconWrapper>
              <Refresh />
            </BasisIconWrapper>
          </BasisSelector>
        </PromptText>

        <BigButton>Caluclate My Profit</BigButton>
      </div>
    )
  }

  visibilityChanged = isVisible => {
    // Give user some time to figure out what's
    // on the screen then show the hint
    window.setTimeout(() => {
      this.setState({
        showInputHint: true,

        // Alert is on until user types something,
        // so we don't need the sensor anymore
        showInputHintSensorActive: false,
      })
    }, 3000);
  }

  hideHint = () => {
    this.setState({ showInputHint: false })
  }

  capitalChanged = e => {
    const capital = Number(e.target.value.replace('$', ''))

    if (typeof capital !== undefined && !isNaN(capital)) {
      this.setState({
        capital,

        // When user typed, we don't need to alert her anymore
        showInputHint: false,
      })
    }
  }

  basisSelectorClicked = () => {
    this.setState(prevState => {
      // Check if we reached the end
      if (prevState.basisPeriodIndex === basisPeriodsLastIndex) {
        return {
          basisPeriodIndex: 0,
          basisPeriodValue: basisPeriods[0],
        }
      }

      const nextIndex = prevState.basisPeriodIndex + 1
      return {
        basisPeriodIndex: nextIndex,
        basisPeriodValue: basisPeriods[nextIndex],
      }
    })
  }

  basisSelectorKeyDowned = e => {
    // TODO: change it on keydown with space and arrow keys
  }
}

export default Calculator

const PromptText = styled.div`
  font-size: ${p => p.theme.sizes.fontHeading2};
  font-family: ${p => p.theme.fonts.heading};
`

const inlineBlocks = css`
  display: inline-block;
  margin: 0 ${p => p.theme.sizes.small10};
  padding-right: ${p => p.theme.sizes.small10};
  padding-left: ${p => p.theme.sizes.small10};
  padding-top: ${rem(3)};

  line-height: 1.2;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.sizes.fontHeading2};
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
`

const CapitalArea = styled.div`
  position: relative;
  display: inline-block;

  ${p => p.showHint && css`
    background: black;
  `}
`

const beep = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.06);
  }
`

const CapitalHint = styled.div`
  position: absolute;
  top: ${rem(-35)};
  left: 50%;
  margin-left: ${rem(-70)};

  width: ${rem(140)};
  height: ${rem(25)};
  line-height: ${rem(25)};

  font-size: ${p => p.theme.sizes.fontTiny};
  font-family: ${p => p.theme.fonts.body};
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: ${p => p.theme.sizes.radiusNormal};
  border: 1px solid #eee;
  background: #fff;
  cursor: default;
  visibility: hidden;
  opacity: 0;

  animation: 500ms ease-in-out alternate infinite ${beep};
  transition: all 150ms;

  ${p => p.isVisible && css`
    visibility: visible;
    opacity: 1;
  `}
`

const CapitalInput = styled.input`
  min-width: 0;

  ${inlineBlocks}

  outline: none;
  border: none;

  color: white;
  background: ${p => p.theme.colours.primary};
  box-shadow: 0 3px 4px 0 rgba(0,0,0,0.07);
  border-radius: ${p => p.theme.sizes.radiusNormal};
  transition: background 100ms, transform 100ms ease-out;

  &:focus {
    background: ${p => darken(0.07, p.theme.colours.primary)};
    transform: scale(1.04);
  }
`

const BasisSelector = styled.button`
  display: inline-block;

  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;

  ${inlineBlocks}

  color: ${p => p.theme.colours.primary};
  background: ${p => p.theme.colours.lightBlue};
  transition: background 100ms, transform 50ms ease-out;

  &:hover {
    background: ${p => darken(0.07, p.theme.colours.lightBlue)};
  }

  &:active {
    transform: scale(0.94);
  }

  &:focus {
    box-shadow: 0 0 0 3px ${p => darken(-0.2, p.theme.colours.primary)};
  }
`

const BasisIconWrapper = styled.span`
  path {
    fill: ${p => darken(-0.1, p.theme.colours.primary)};
  }
`
