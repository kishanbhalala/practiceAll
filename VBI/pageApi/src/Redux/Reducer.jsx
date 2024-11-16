import { ADD_TO_CART, DECREMENT_QUANTITY, EMPTY_CART, INCREMENT_QUANTITY, REMOVE_TO_CART } from './Constant'

const initialState = JSON.parse(localStorage.getItem('cartData')) || [];

export const cartData = (data = initialState, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            // console.log("reducer ADD_TO_CART called", action);
            const existingProductIndex = data.findIndex((item) => item.productId === action.data.productId);

            if (existingProductIndex !== -1) {
                // Product already exists in the cart, update the quantity
                return data.map((item, index) =>
                    index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // Product is not in the cart, add it
                return [{ ...action.data, quantity: 1 }, ...data];
            }

        case REMOVE_TO_CART:
            // console.log("reducer REMOVE_TO_CART called", action);
            const remainingItem = data.filter((item) => item.productId !== action.data)
            // console.log("del", remainingItem);
            return [...remainingItem];

        case INCREMENT_QUANTITY:
            return data.map((item) =>
                item.productId === action.data
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

        case DECREMENT_QUANTITY:
            return data.map((item) =>
                item.productId === action.data && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );

        case EMPTY_CART:
            // console.log("reducer EMPTY_CART called", action);
            data = []
            return [...data];


        default:
            return data;
    }
}