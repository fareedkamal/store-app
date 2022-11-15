import { ActionButton } from '../shared/ActionButton'
import { Men, Women, All } from './ProductGrid'
import { ProductHeader } from './ProductHeader'

export const Products = ({ category }) => {
  return (
    <div >
        <ProductHeader/>
        { category === 'men'
          ? <Men/>
          : (category === 'women'
              ? <Women/>
              : <All/>)}
        <div className='flx' style={{ height: '200px' }}>
            <ActionButton title='LOAD MORE'/>
        </div>
    </div>
  )
}
