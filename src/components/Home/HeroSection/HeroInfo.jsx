import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ActionButton } from '../../shared/ActionButton'
const Wrapper = styled.div`
display: flex;
flex-direction: column;
position: absolute;
top:15em;
color: ${(props) => props.theme.color.primary};
`

export const HeroInfo = () => {
  return (
    <Wrapper>
        <p className='fs-s fw-l' style={{ marginBottom: '0.9em' }}>Men - collection 2022</p>
        <p className='fs-l fw-l'style={{ marginBottom: '0.2em' }}>NEW ARRIVALS</p>
        <Link to="/products"><ActionButton title='SHOP NOW' /></Link>
    </Wrapper>
  )
}
