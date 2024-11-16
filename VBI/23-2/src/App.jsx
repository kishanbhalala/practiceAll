import React from 'react'
import Navbar from './COMPONENTS/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './COMPONENTS/Footer'
import { Provider } from 'react-redux'
import store from './reduxFolder/store'



function App() {

  return (
    <>
      <Provider store={store}>
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </Provider>
    </>
  )
}

export default App
