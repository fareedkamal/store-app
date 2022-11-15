import styled from 'styled-components'
import { ActionButton } from './shared/ActionButton'

const Contact = () => {
  return (
    <div style={{
      display: 'flex',
      color: '#707070',
      margin: '5em 0',
      height: '700px'
    }}>
        <MessageBox/>
        <ContactDetails/>
    </div>
  )
}

const MessageBox = () => {
  const style = {
    border: '1px solid #707070',
    padding: '1em'
  }
  return (
        <Wrapper>
            <p className='fs-m fw-l'>Send Us A Message</p>
            <input style={style} placeholder='Your Email Address'/>
            <textarea style={style}rows='10'placeholder='How Can We Help?'/>
            <ActionButton style={{ width: '100%' }}title='Submit' color/>
        </Wrapper>
  )
}

const ContactDetails = () => {
  return (
        <Wrapper>
            <div>
                <div/>
                <p className='fs-m fw-l'>Address</p>
                <p className='fs-m'>Pakistan</p>
            </div>
            <div>
                <div/>
                <p className='fs-m fw-l'>Lets Talk</p>
                <p className='fs-m'>+123456789</p>
            </div>
            <div>
                <div/>
                <p className='fs-m fw-l'>Sale Support</p>
                <p className='fs-m'>fkamalars@gmail.com</p>
            </div>
        </Wrapper>
  )
}

const Wrapper = styled.div`
    border: 1px solid #707077;
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 10em;
    gap: 2em;

`

export default Contact
