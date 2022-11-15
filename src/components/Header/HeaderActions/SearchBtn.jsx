import styled from 'styled-components'
import { StyledBtn } from './StyledBtn'
import search from '@/assets/icons/search.svg'

const Btn = styled(StyledBtn)`
  background-image: url(${search});
`

export const SearchBtn = () => {
  return (
    <Btn/>
  )
}
