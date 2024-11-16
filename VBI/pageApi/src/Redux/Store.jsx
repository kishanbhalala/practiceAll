// import { configureStore } from '@reduxjs/toolkit'
// import RootReducer from './RootReducer'
// // import ProductSaga from './ProductSaga'
// // import createSagaMiddleware from 'redux-saga'

// // const sagaMiddleware = createSagaMiddleware();
// const store = configureStore(
//     {
//         reducer: RootReducer,
//         // middleware: () => [sagaMiddleware]
        
//     }
// )

// // sagaMiddleware.run(ProductSaga)
// export default store


// store.js

// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import RootReducer from './RootReducer';
// import localStorageMiddleware from './localStorageMiddleware';

// const middleware = [...getDefaultMiddleware(), localStorageMiddleware];

// const store = configureStore({
//   reducer: RootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
// });

// export default store;

// store.js

import { createStore, applyMiddleware } from 'redux';
import RootReducer from './RootReducer';
import localStorageMiddleware from './localStorageMiddleware';

const store = createStore(RootReducer, applyMiddleware(localStorageMiddleware));

export default store;

