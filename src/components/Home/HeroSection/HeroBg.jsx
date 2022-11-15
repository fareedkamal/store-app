import modelImage from '@/assets/images/model.png'
import styled from 'styled-components'

const Wrapper = styled.div`
width: 100%;
height:100%;
position: relative;
`

const Circle = styled.div`
height: 500px;
    width: 500px;
    border-radius: 100%;
    background-color: #ddc2b3;
    position: absolute;
    right: 8em;
`

const Image = styled.img`
    height: 700px;
    position: absolute;
    right: -8em;
`

export const HeroBg = () => {
  return (
        <Wrapper>
            <Circle/>
            <Image src={modelImage}/>
        </Wrapper>
  )
}
