import { Route, Routes } from 'react-router'
import { Products } from './Products'
import { Home } from './Home'
import { ItemPage } from './ItemPage/ItemPage'
import CartPage from './CartPage'
import Contact from './Contact'

export const Main = ({ cart, updateCart }) => {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/products" element={<Products category='all'/>} />
        <Route exact path="/products/men" element={<Products category='men'/>} />
        <Route exact path="/products/women" element={<Products category='women'/>} />
        <Route exact path="/item" element={<ItemPage updateCart={updateCart}/>} />
        <Route exact path="/cart" element={<CartPage cart={cart}/>} />
        <Route exact path="/contact" element={<Contact/>} />
    </Routes>
  )
}
