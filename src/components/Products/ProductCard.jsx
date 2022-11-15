import styled from 'styled-components'
import { FavBtn } from '../Header/HeaderActions/FavBtn'
import { useNavigate } from 'react-router-dom'

const Wrapper = styled.div`
height: 500px;
width: auto;
`

const ProductImage = styled.div`
    height: 400px;
    width: inherit;
    background-image: url(${(props) => props.src[0]});
    background-size: cover;
    background-repeat: no-repeat;
    border: 1px solid ${(props) => props.theme.color.primary};
    margin-bottom: 1.5em;
    transition: all ease 0.3s;
    &:hover{
      background-image: url(${(props) => props.src[1]});
    }
`
const ProductInfo = () => {
  return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
              <p className='fs-s fw-m c-p'>Clothing Jacket</p>
              <p className='fs-s fw-l c-p'>$75.00</p>
          </div>
          <FavBtn/>
      </div>
  )
}

export const ProductCard = ({ src }) => {
  const navigate = useNavigate()

  return (
    <Wrapper>
        <ProductImage src={src} onClick={() => {
          navigate('/item', { state: { src: src[0] } })
        }}/>
        <ProductInfo/>
    </Wrapper>
  )
}
