import React from 'react'
import AllPages from './AllPages'
import { CartProvider } from './Context/CartContext'
import { WishProvider } from './Context/WishContext'

const App = () => {
  return (
    <div>
      <CartProvider>
        <WishProvider>

          <AllPages />

        </WishProvider>
      </CartProvider>
    </div>
  )
}

export default App
