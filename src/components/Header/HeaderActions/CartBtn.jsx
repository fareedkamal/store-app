import styled from 'styled-components'
import { StyledBtn } from './StyledBtn'
import cartIcon from '@/assets/icons/shopping-cart.svg'
import { useNavigate } from 'react-router-dom'

const Btn = styled(StyledBtn)`
  background-image: url(${cartIcon});
`

export const CartBtn = () => {
  const navigate = useNavigate()
  return (
    <Btn onClick={() => {
      navigate('/cart')
    }}/>
  )
}
