
const CartReducer = (state, action) => {


    if (action?.type === "ADD_TO_CART") {
        let { productDetails } = action?.payload;
        // console.log("reducer Add cart", productDetails);

        // Check if the product is already in the cart
        const existingProduct = state?.cart?.find(item => item?.productId === productDetails?.productId);

        if (existingProduct) {
            // If the product is already in the cart, update its quantity
            return {
                ...state,
                cart: state?.cart.map(item =>
                    item?.productId === productDetails?.productId
                        ? { ...item, quantity: item?.quantity + 1 }
                        : item
                ),
            };
        } else {
            // If the product is not in the cart, add it with an initial quantity of 1
            return {
                ...state,
                cart: [...state?.cart, { ...productDetails, quantity: 1 }],
            };
        }
    }


    if (action?.type === "REMOVE_FROM_CART") {

        let productIdToRemove = action?.payload?.productId;
        // console.log('remove id',productIdToRemove);

        return {
            ...state,
            cart: state?.cart?.filter((item) => item?.productId !== productIdToRemove),
        }
    }

    if (action?.type === "INCREMENT_QUANTITY") {
        return {
            ...state,
            cart: state?.cart.map((item) =>
                item?.productId === action?.payload?.productId
                    ? { ...item, quantity: item?.quantity + 1 }
                    : item
            ),
        }
    }

    if (action?.type === "DECREMENT_QUANTITY") {
        return {
            ...state,
            cart: state?.cart?.map((item) =>
                item?.productId === action?.payload?.productId && item?.quantity > 1
                    ? { ...item, quantity: item?.quantity - 1 }
                    : item
            ),
        }

    }

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
        };
    }


    return state;
}

export default CartReducer