import styled from 'styled-components'
import Footer from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
import useCart from './components/shared/useCart'
const Wrapper = styled.div`
width: 1300px;
`

export const App = () => {
  const [cart, updateCart] = useCart()
  return (
      <Wrapper>
        <Header cart={cart}/>
        <Main cart={cart} updateCart={updateCart}/>
        <Footer/>
      </Wrapper>
  )
}
