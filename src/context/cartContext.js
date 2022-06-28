import React, { createContext, useState } from 'react'

export const cartContext = createContext()
const Provider = cartContext.Provider
const CartProvider = (props) => {
  const [cart, setCart] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (item, quantity) => {
    const itemAgregado = {
      ...item,
      quantity: quantity,
    }
    const copyCart = [...cart]

    if (isInCart(item.id)) {
      copyCart.forEach((element) => {
        if (element.id === item.id) element.quantity += quantity
      })
      setCart(copyCart);
      setTotalQuantity(totalQuantity + quantity)
    } else {
      copyCart.push({ ...itemAgregado });
      setCart(copyCart);
      setTotalQuantity(totalQuantity + quantity)
    }
  }

  const removeItem = (itemId) => {}
  
  const isInCart = (idSearch) => {
    return cart.find(({ id }) => id === idSearch) ? true : false;
  }

  const clear = () => {
    setCart([]);
    setTotalQuantity(0);
  }

  const allContext = {
    cart: cart,
    totalQuantity: totalQuantity,
    totalPrice: totalPrice,
    addItem: addItem,
    removeItem: removeItem,
    clear: clear,
  }

  return <Provider value={allContext}>{props.children}</Provider>;
}

export default CartProvider