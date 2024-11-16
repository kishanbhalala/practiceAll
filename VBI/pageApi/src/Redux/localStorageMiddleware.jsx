// localStorageMiddleware.js

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const { cartData, wishData, RecentViewReducer } = store.getState();

  localStorage.setItem('cartData', JSON.stringify(cartData));
  localStorage.setItem('wishData', JSON.stringify(wishData));
  localStorage.setItem('recentViewsState', JSON.stringify(RecentViewReducer));

  return result;
};

export default localStorageMiddleware;
