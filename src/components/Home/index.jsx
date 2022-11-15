import { HeroSection } from './HeroSection'
import { CategorySection } from './CategorySection'
import { Products } from '../Products'

export const Home = () => {
  return (
    <>
      <HeroSection/>
      <div className='flx col g-m' style={{ marginTop: '6em', width: 'inherit' }}>
        <CategorySection/>
        <div style={{ width: 'inherit' }}>
          <p className='fs-m c-p fw-l' >PRODUCT OVERVIEW</p>
          <Products/>
        </div>
      </div>
    </>
  )
}
