import { useState } from 'react'

import styled from 'styled-components'

const QuantityButton = () => {
  const [value, setValue] = useState(1)
  const add = () => {
    setValue(value + 1)
  }
  const subtract = () => {
    setValue((prevValue) => {
      return ((prevValue === 1 && 1) || prevValue - 1)
    })
  }
  return (
    <div style={{
      border: '1px solid #707070',
      width: '120px',
      display: 'flex',
      color: '#707070'
    }}>
        <StyledButton onClick={subtract}>-</StyledButton>
        <button id='quantity' style={{
          width: '50%',
          height: '100%',
          backgroundColor: '#ece3d6'
        }}>{value}</button>
        <StyledButton onClick={add}>+</StyledButton>

    </div>
  )
}

const StyledButton = styled.button`
    width: 50%;
    height: 100%;
    background: none;
    transition: ease 0.5s;
    &:hover{
        background-color: #707070;
        color:white;
    }
`

export default QuantityButton
