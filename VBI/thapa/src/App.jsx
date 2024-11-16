import React from 'react'
import Allpages from './AllPAGES/Allpages'
import { AppProvider } from './Context/ProductContext'
import { FilterContextProvider } from './Context/Filter_Context'
import { CartProvider } from './Context/Cart_Context'
import { Auth0Provider } from '@auth0/auth0-react';
import { WishListProvider } from './Context/Wishlist_Context'

const App = () => {

  return (
    <div>
      <Auth0Provider
        domain="dev-f2a04urbb53jyocj.us.auth0.com"
        clientId="J6BaRcVyYNg0Vr5dw7kYfyExmLLepCQa"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >

        <AppProvider>
          <FilterContextProvider>
            <CartProvider>
              <WishListProvider>

                <Allpages />

              </WishListProvider>
            </CartProvider>
          </FilterContextProvider>
        </AppProvider>

      </Auth0Provider>,
    </div>
  )
}

export default App
