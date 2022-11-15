import styled from 'styled-components'
import { ActionButton } from './shared/ActionButton'
import { nanoid } from 'nanoid'

const CartPage = ({ cart }) => {
  return (
    <Wrapper>
      <CartList cart={cart}/>
      <CheckoutForm/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
margin: 4em 0 4em 0;
display: flex;
gap: 4em;
`

const CartList = ({ cart }) => {
  return (
    <div style={{
      width: '60%',
      border: '1px solid #707070',
      height: 'fit-content'
    }}>
      <Table>
        <thead>
          <td>PRODUCT</td>
          <td>PRICE</td>
          <td>QUANTITY</td>
          <td>TOTAL</td>
        </thead>
        {
          cart.map(item => <CartRow key={nanoid()} item={item}/>)
        }
      </Table>
      {(cart.length === 0 && <p className='flx fw-s fw-l'>Your Cart is Empty</p>)}
      <div style={{ padding: '1em' }} className='flx g-s'>
        <ActionButton title='APPLY COUPON' />
        <ActionButton title='UPDATE CART' />
      </div>
    </div>
  )
}

const CartRow = ({ item }) => {
  return (
    <tr>
      <td>
        <div style={{ display: 'flex', gap: '2em', alignItems: 'center' }}>
          <Thumbnail image={item.image}/>
          {item.title}
        </div>
      </td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <td>$75.00</td>
    </tr>
  )
}

const Thumbnail = styled.div`
  height:100px;
  width:90px;
  background-image: url(${(props) => props.image});
  background-size: cover;
`

const Table = styled.table`
  border-collapse: collapse;
  height:fit-content;
  width:100%;

  tr,thead {
    border-bottom:1px solid #707070;
    height: fit-content;
  }
  td{
    padding:1em 2em;
  }
`

const CheckoutForm = () => {
  const styleSelect = {
    borderRadius: '5px',
    padding: '1em 1.5em',
    width: '80%',
    fontFamily: 'Josefin Sans'
  }

  return (
    <div style={{
      width: '40%',
      height: 'fit-content',
      gap: '2em',
      padding: '2em',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #707070',
      color: '#707070'
    }}>
      <p className='fs-s fw-l'>CART TOTALS</p>
      <StyledDiv>
        <tr>
          <td className='fw-l'>Subtotal:</td>
          <td>$150.00</td>
        </tr>
        <tr>
          <td className='fw-l'>Shipping:</td>
          <td>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1em'
            }}>
              <p>There are no shipping methods available. Please double check your address, or contact us if you need help.</p>
              <p className='fw-l'>CALCULATE SHIPPING</p>
              <select style={styleSelect}><option>Select a country...</option></select>
              <select style={styleSelect}><option>State / Country</option></select>
              <select style={styleSelect}><option>Postcode / Zip</option></select>
              <ActionButton title='UPDATE TOTALS'/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='fw-l'>Total:</td>
          <td>$150.00</td>
        </tr>
      </StyledDiv>
      <ActionButton style={{ width: '100%' }} title='PROCEED TO CHECKOUT' color/>
    </div>
  )
}

const StyledDiv = styled.div`
display:flex;
flex-direction: column;
gap:1em;
tr > td{
  padding-right: 3em;
}
`

export default CartPage
