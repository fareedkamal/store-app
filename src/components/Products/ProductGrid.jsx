import styled from 'styled-components'
import { ProductCard } from './ProductCard'
import men from '../../assets/men'
import women from '../../assets/women'

const Wrapper = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 3em;
`

export const Men = () => {
  return (
    <Wrapper>
        <ProductCard src={[men[0], men[1]]}/>
        <ProductCard src={[men[2], men[3]]}/>
        <ProductCard src={[men[4], men[5]]}/>
        <ProductCard src={[men[6], men[7]]}/>
        <ProductCard src={[men[0], men[1]]}/>
        <ProductCard src={[men[2], men[3]]}/>
        <ProductCard src={[men[4], men[5]]}/>
        <ProductCard src={[men[6], men[7]]}/>
        <ProductCard src={[men[0], men[1]]}/>
        <ProductCard src={[men[2], men[3]]}/>
        <ProductCard src={[men[4], men[5]]}/>
        <ProductCard src={[men[6], men[7]]}/>
    </Wrapper>
  )
}

export const Women = () => {
  return (
    <Wrapper>
        <ProductCard src={[women[0], women[1]]}/>
        <ProductCard src={[women[2], women[3]]}/>
        <ProductCard src={[women[4], women[5]]}/>
        <ProductCard src={[women[6], women[7]]}/>
        <ProductCard src={[women[0], women[1]]}/>
        <ProductCard src={[women[2], women[3]]}/>
        <ProductCard src={[women[4], women[5]]}/>
        <ProductCard src={[women[6], women[7]]}/>
        <ProductCard src={[women[0], women[1]]}/>
        <ProductCard src={[women[2], women[3]]}/>
        <ProductCard src={[women[4], women[5]]}/>
        <ProductCard src={[women[6], women[7]]}/>
    </Wrapper>
  )
}

export const All = () => {
  return (
    <Wrapper>
        <ProductCard src={[men[0], men[1]]}/>
        <ProductCard src={[men[2], men[3]]}/>
        <ProductCard src={[men[4], men[5]]}/>
        <ProductCard src={[men[6], men[7]]}/>
        <ProductCard src={[men[0], men[1]]}/>
        <ProductCard src={[men[2], men[3]]}/>
        <ProductCard src={[women[4], women[5]]}/>
        <ProductCard src={[women[6], women[7]]}/>
        <ProductCard src={[women[0], women[1]]}/>
        <ProductCard src={[women[2], women[3]]}/>
        <ProductCard src={[women[4], women[5]]}/>
        <ProductCard src={[women[6], women[7]]}/>
    </Wrapper>
  )
}
