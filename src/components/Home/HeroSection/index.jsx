import styled from 'styled-components'
import { ColorBg } from '../../shared/ColorBg'
import { HeroBg } from './HeroBg'
import { HeroInfo } from './HeroInfo'

const Wrapper = styled.div`
height:700px;
overflow: hidden;

`

export const HeroSection = () => {
  return (
    <Wrapper>
      <ColorBg/>
      <div style={{ position: 'relative' }}>
        <HeroBg/>
        <HeroInfo/>
      </div>
    </Wrapper>
  )
}
