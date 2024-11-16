// import { combineReducers } from 'redux'
// import { cartData } from './Reducer'
// // import { ProductData } from './ProductReducer'
// import { wishData } from './WishlistReducer'

// export default combineReducers({
//      cartData,
//      wishData
//     // ProductData,
// })

// reducers/index.js

import { combineReducers } from 'redux';
import { cartData } from './Reducer';
import { wishData } from './WishlistReducer';
import { RecentViewReducer } from './RecentViewReducer'

const RootReducer = combineReducers({
    cartData,
    wishData,
    RecentViewReducer
});

export default RootReducer;
