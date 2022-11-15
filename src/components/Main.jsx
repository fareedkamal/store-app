import { Route, Routes } from 'react-router'
import { Products } from './Products'
import { Home } from './Home'
import { ItemPage } from './ItemPage/ItemPage'
import CartPage from './CartPage'
import Contact from './Contact'

export const Main = ({ cart, updateCart }) => {
  return (
    <Routes>
        <Route exact path="/store-app" element={<Home/>} />
        <Route exact path="/store-app/products" element={<Products category='all'/>} />
        <Route exact path="/store-app/products/men" element={<Products category='men'/>} />
        <Route exact path="/store-app/products/women" element={<Products category='women'/>} />
        <Route exact path="/store-app/item" element={<ItemPage updateCart={updateCart}/>} />
        <Route exact path="/store-app/cart" element={<CartPage cart={cart}/>} />
        <Route exact path="/store-app/contact" element={<Contact/>} />
    </Routes>
  )
}
