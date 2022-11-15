import styled from 'styled-components'

export const ItemGallery = ({ src }) => {
  const style = {
    display: 'flex',
    height: '700px',
    width: '700px',
    gap: '3em',
    gridArea: 'gallery'
  }
  return (
      <div style={style}>
          <SideView src={src}/>
          <MainView src={src}/>
      </div>
  )
}

const SideView = ({ src }) => {
  const style = {
    width: '15%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '2em'
  }

  return (
        <div style={style}>
            <ImageBox src={src}/>
            <ImageBox src={src}/>
            <ImageBox src={src}/>
        </div>
  )
}

const ImageBox = styled.div`
  height: 20%;
  width: 100px;
  background-image: url(${(props) => props.src});
  background-size: cover;
`

const MainView = styled.div`
height: 100%;
width: 80%;
background-image: url(${(props) => props.src});
background-size: cover;
`
