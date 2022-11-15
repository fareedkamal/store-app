import styled from 'styled-components'
import { HeaderLogo } from './HeaderLogo'
import { HeaderNavs } from './HeaderNavs'
import { HeaderActions } from './HeaderActions'
import { ColorBg } from '../shared/ColorBg'

const HeaderWrapper = styled.div`
  height: 85px; 
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all ease 0.5s;
`

export function Header ({ cart }) {
  return (
    <HeaderWrapper>
      <ColorBg/>
      <HeaderLogo />
      <HeaderNavs />
      <HeaderActions cart={cart} />
    </HeaderWrapper>
  )
}
