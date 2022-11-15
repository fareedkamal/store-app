import styled from 'styled-components'
import { StyledBtn } from './StyledBtn'
import favIcon from '@/assets/icons/heart.svg'

const Btn = styled(StyledBtn)`
  background-image: url(${favIcon});
`

export const FavBtn = () => {
  return (
    <Btn/>
  )
}
