import img1 from '@/assets/images/category-card-1.jpg'
import img2 from '@/assets/images/category-card-2.jpg'
import { CategoryCard } from './CategoryCard'

export const CategorySection = () => {
  return (
    <div className="flx" style={{ width: 'inherit', justifyContent: 'space-between' }}>
        <CategoryCard src={img1} h1="Women" h2="Fall 2022"/>
        <CategoryCard src={img2} h1="Men" h2="Fall 2022"/>
        <CategoryCard src={img2} h1="Accessories" h2="New Trend"/>
    </div>

  )
}
