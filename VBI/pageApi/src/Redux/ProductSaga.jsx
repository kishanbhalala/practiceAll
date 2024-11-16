// import { put, takeEvery } from 'redux-saga/effects'
// import { PRODUCT_LIST, SET_PRODUCT_LIST } from './Constant';

// function* getProducts() {

//      try {
//         let data = yield fetch('https://kori-cakes-backend.vercel.app/api/products');
//         data = yield data.json();
//         // console.log("product list call", data);

//         yield put({ type: SET_PRODUCT_LIST, data });
//     } catch (error) {
//         console.error("Error fetching products:", error);
//     }

// }
// function* ProductSaga() {
//     yield takeEvery(PRODUCT_LIST, getProducts)
// }

// export default ProductSaga;



// // type SET_PRODUCT_LIST thi direct Productreducer call thase 