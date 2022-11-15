import styled from 'styled-components'

const Wrapper = styled.div`
    width: 413px;
    height: 255px;
    border: 1px solid #70707095;
    color: #707070;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
`

export const CategoryCard = ({ src, h1, h2 }) => {
  return (
    <Wrapper src={src}>
        <div className='flx col' style={{ width: 'fit-content', padding: '2em 3em', alignItems: 'unset' }}>
            <p className='fs-m fw-l'>{h1}</p>
            <p className='fs-s'>{h2}</p>
        </div>
    </Wrapper>
  )
}
