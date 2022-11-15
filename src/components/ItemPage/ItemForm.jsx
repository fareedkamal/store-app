import styled from 'styled-components'
import { ActionButton } from '../shared/ActionButton'
import QuantityButton from '../shared/QuantityButton'

export const ItemForm = ({ src, updateCart }) => {
  return (
    <Wrapper>
        <ItemInfo/>
        <ItemOptions src={src} updateCart={updateCart}/>
        {/* <ContactLinks/> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    border: 1px solid ${(props) => props.theme.color.primary};
    height: 500px;
    width: 500px;
    padding: 3em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    grid-area:form;
    justify-self: end;
    color:#707070;
    `

const ItemInfo = () => {
  return (
        <div>
            <p className='fs-s fw-l'>Clothing Jacket</p>
            <p className='fs-s fw-l'>$150.00</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sint accusamus at quibusdam, illum ex consequatur ea non deserunt minus.</p>
        </div>
  )
}

const ItemOptions = ({ src, updateCart }) => {
  const AddToCart = () => {
    console.log('addtocart')
    const item = {
      image: src,
      title: 'Ladies Clothing',
      price: '$150.00',
      quantity: Number(document.getElementById('quantity').textContent)
    }
    updateCart(item)
  }

  const style = {
    display: 'flex',
    gap: '2em',
    placeItems: 'center',
    justifyContent: 'space-around'
  }
  const styleSelect = {
    borderRadius: '5px',
    padding: '1em 1.5em',
    width: '80%',
    fontFamily: 'Josefin Sans'
  }
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '2em' }}>
        <div style={style}>
            <label>Size</label>
            <select style={styleSelect}>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>Extra Large</option>
            </select>
        </div>
        <div style={style}>
            <label>Color</label>
            <select style={styleSelect}>
                <option>Black</option>
                <option>Blue</option>
                <option>Brown</option>
                <option>Red</option>
            </select>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <QuantityButton />
          <ActionButton onClick={AddToCart} title='ADD TO CART'/>
        </div>
    </div>
  )
}
