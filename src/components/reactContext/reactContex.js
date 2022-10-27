import React from 'react'

const reactContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
})
export default reactContext
