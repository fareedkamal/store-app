import { useState } from 'react'

const useCart = () => {
  const [cart, setCart] = useState([])
  const updateCart = (item) => {
    setCart([...cart, item])
  }
  return (
    [cart, updateCart]
  )
}

export default useCart
