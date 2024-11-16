import { ADD_RECENT_VIEW, ADD_TO_CART, DECREMENT_QUANTITY, EMPTY_CART, INCREMENT_QUANTITY, REMOVE_TO_CART, WISHLIST_ADD, WISHLIST_REMOVE } from './Constant'

export const addToCart = (data) => {
    console.log("add cart call", data);
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeToCart = (data) => {
    // console.log(" remove cart call", data);
    return {
        type: REMOVE_TO_CART,
        data
    }
}

export const incrementQuantity = (data) => {
    return {
      type: INCREMENT_QUANTITY,
      data,
    };
  };
  
  export const decrementQuantity = (data) => {
    return {
      type: DECREMENT_QUANTITY,
      data,
    };
  };

export const emptyCart = () => {
    // console.log("empty cart call");
    return {
        type: EMPTY_CART,
    }
}

export const wishlistAdd = (data) => {    
    // console.log("wish action", data); 
    return {
        type: WISHLIST_ADD,
        data
    }
}

export const wishlistRemove = (data) => {    
    return {
        type: WISHLIST_REMOVE,
        data
    }
}

export const addRecentView = (data) => {
    console.log("aaa",data);
    return{
        type: ADD_RECENT_VIEW,
        data
    }
}