import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { ItemDetails } from './ItemDetails'
import { ItemForm } from './ItemForm'
import { ItemGallery } from './ItemGallery'

export const ItemPage = ({ updateCart }) => {
  const { state } = useLocation()
  const { src } = state
  return (
    <Wrapper>
        <ItemGallery src={src}/>
        <ItemForm src={src} updateCart={updateCart}/>
        <ItemDetails/>
    </Wrapper>

  )
}

const Wrapper = styled.div`
width: inherit;
height: auto;
grid-template-columns: 1fr 1fr;
display: grid;
grid-template-areas:
    "gallery form"
    "details details";
row-gap: 5em;
margin:5em 0;
`
