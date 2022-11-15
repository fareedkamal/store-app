import styled from 'styled-components'
import { HeaderLink } from '../shared/HeaderLink'
import { ActionButton } from '../shared/ActionButton'
import filterIcon from '@/assets/icons/filter-results-button.png/'
import searchIcon from '@/assets/icons/search-icon-white.png/'

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
height: 100px;
`

export const ProductHeader = () => {
  return (
    <Wrapper>
        <div className='flx g-s'>
            <HeaderLink to='/products'>All Products</HeaderLink>
            <HeaderLink to='/products/men'>Men</HeaderLink>
            <HeaderLink to='/products/women'>Women</HeaderLink>
        </div>
        <div className='flx g-s'>
            <ActionButton icon={filterIcon} title='Filter' />
            <ActionButton icon={searchIcon} title='Search' color />
        </div>
    </Wrapper>
  )
}
