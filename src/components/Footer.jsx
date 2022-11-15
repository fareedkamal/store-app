import styled from 'styled-components'
import { ActionButton } from './shared/ActionButton'
import { ColorBg } from './shared/ColorBg'
import { HeaderLink } from './shared/HeaderLink'

const Footer = () => {
  return (
    <Wrapper>
        <ColorBg/>
        <Categories/>
        <Help/>
        <GetInTouch/>
        <NewsLetter/>
        <Copyright/>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
height:400px;
background-color: ${(props) => props.theme.color.third};
display: grid;
grid-template-columns: 1fr 1fr 2fr 2fr;
column-gap: 3em;
align-content: space-around;

`

const style = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2em'
}

const Categories = () => {
  return (
    <div style={style}>
        <p className='fs-s fw-l'>CATEGORIES</p>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
            <HeaderLink>Women</HeaderLink>
            <HeaderLink>Men</HeaderLink>
            <HeaderLink>Shoes</HeaderLink>
            <HeaderLink>Watches</HeaderLink>
        </div>
    </div>
  )
}

const Help = () => {
  return (
      <div style={style}>
          <p className='fs-s fw-l'>HELP</p>
          <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
              <HeaderLink>Track Order</HeaderLink>
              <HeaderLink>Returns</HeaderLink>
              <HeaderLink>Shipping</HeaderLink>
              <HeaderLink>FAQs</HeaderLink>
          </div>
      </div>
  )
}

const GetInTouch = () => {
  return (
      <div style={style}>
          <p className='fs-s fw-l'>GET IN TOUCH</p>
          <p>Any questions? Let us know in store at 8th floor, 000 Hudson St, New York, NY 1000 or call us on {'(+0)'} 00 000 0000  </p>
      </div>
  )
}

const NewsLetter = () => {
  return (
        <div style={style}>
            <p className='fs-s fw-l'>NEWSLETTER</p>
            <input style={{
              padding: '1em 0',
              backgroundColor: 'transparent',
              borderBottom: '1px solid #707070',
              width: '100%'
            }} type='text' placeholder='Email@example.com'/>
            <ActionButton title='SUBSRIBE'/>
        </div>
  )
}
const Copyright = () => {
  return (
    <p style={{
      gridColumn: '1 / -1',
      textAlign: 'center'
    }}>Copyright ©2022 developed by fareedkamal with Reactjs Router & Redux</p>
  )
}

export default Footer
