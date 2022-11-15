import { SearchBtn } from './SearchBtn'
import { CartBtn } from './CartBtn'
import { FavBtn } from './FavBtn'

export const HeaderActions = ({ cart }) => {
  return (
        <div className="flx g-s">
            <SearchBtn/>
            <div className='flx g-s'>
              <CartBtn />{(cart.length > 0) && <p>({cart.length})</p>}
            </div>
            <FavBtn/>
        </div>
  )
}
