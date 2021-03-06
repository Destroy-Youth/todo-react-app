import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { updateTaskState } from '../helpers'

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? 'salmon' : 'pink')};
  border-radius: 3px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const NoSelectSpan = styled.span`
  cursor: pointer;
  user-select: none;
`

function Checkbox({ className, isChecked, onChange, label, ...props }) {
  return (
    <div>
      <label>
        <CheckboxContainer className={className}>
          <HiddenCheckbox checked={isChecked} {...props} onChange={onChange} />
          <StyledCheckbox checked={isChecked}>
            <Icon viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </Icon>
          </StyledCheckbox>
        </CheckboxContainer>
        <NoSelectSpan style={{ marginLeft: '0.4rem' }}>{label}</NoSelectSpan>
      </label>
    </div>
  )
}

export default Checkbox
