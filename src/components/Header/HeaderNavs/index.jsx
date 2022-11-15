import { HeaderLink } from '../../shared/HeaderLink'

export const HeaderNavs = () => {
  return (
        <div className='flx g-m'>
            <HeaderLink to='/'>Home</HeaderLink>
            <HeaderLink to='/products'>Shop</HeaderLink>
            <HeaderLink to='/contact'>About</HeaderLink>
        </div>
  )
}
