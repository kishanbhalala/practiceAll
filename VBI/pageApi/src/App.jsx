import React from 'react'
import AllPages from './AllPages'
import { Provider } from 'react-redux'
import store from './Redux/Store'


const App = () => {
  return (
    <div>
      <Provider store={store}>
        <AllPages />
      </Provider>
    </div>
  )
}

export default App
