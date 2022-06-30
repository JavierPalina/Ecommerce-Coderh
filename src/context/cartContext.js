import React, { createContext, useState } from 'react'

export const cartContext = createContext()

const Provider = cartContext.Provider
const CartProvider = (props) => {
  const [cart, setCart] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const addItem = (item, quantity) => {
    const itemAdded = {
      ...item,
      quantity: quantity,
    }

    const copyCart = [...cart]

    if (isInCart(item.id)) {
      copyCart.forEach((product) => {
        if (product.id === item.id) product.quantity += quantity
      })
      setCart(copyCart)
      setTotalQuantity(totalQuantity + quantity)
      setTotalPrice(
        (totalPrice + itemAdded.price * quantity))
    } else {
      copyCart.push({ ...itemAdded });
      setCart(copyCart)
      setTotalQuantity(totalQuantity + quantity)
      setTotalPrice(
        (totalPrice + itemAdded.price * quantity))
    }
  }

  const removeItem = (id) => setCart(cart.filter(item => item.id !== id))
  
  const isInCart = (idSearch) => {
    return cart.find(({ id }) => id === idSearch) ? true : false;
  }

  const clear = () => {
    setCart([]);
    setTotalQuantity(0)
    setTotalPrice(0)
  }

  const allContext = {
    cart,
    totalQuantity,
    totalPrice,
    addItem,
    removeItem,
    clear,
  }

  return <Provider value={allContext}>{props.children}</Provider>
}

export default CartProvider