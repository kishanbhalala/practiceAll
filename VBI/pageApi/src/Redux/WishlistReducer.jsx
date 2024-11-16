
import { DECREMENT_QUANTITY, INCREMENT_QUANTITY, WISHLIST_ADD, WISHLIST_REMOVE } from "./Constant";

const initialState = JSON.parse(localStorage.getItem('wishData')) || [];

export const wishData = (data = initialState, action) => {

    switch (action.type) {

        case WISHLIST_ADD:

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

        case WISHLIST_REMOVE:
            const remainingItem = data.filter((item) => item.productId !== action.data)
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




        default:
            return data;
    }
}