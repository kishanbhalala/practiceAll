
const WishReducer = (state, action) => {


    if (action?.type === "WISH_LIST_ADD") {
        let { productDetails } = action?.payload;
        // console.log("reducer wish add", productDetails);

        // Check if the product is already in the cart
        const existingProduct = state?.wish?.find(item => item?.productId === productDetails?.productId);

        if (existingProduct) {
            // If the product is already in the cart, update its quantity
            return {
                ...state,
                wish: state?.wish.map(item =>
                    item?.productId === productDetails?.productId
                        ? { ...item, quantity: item?.quantity + 1 }
                        : item
                ),
            };
        } else {
            // If the product is not in the cart, add it with an initial quantity of 1
            return {
                ...state,
                wish: [...state?.wish, { ...productDetails, quantity: 1 }],
            };
        }
    }


    if (action?.type === "WISH_REMOVE_ITEM") {

        let productIdToRemove = action?.payload?.productId;
        // console.log('remove id',productIdToRemove);

        return {
            ...state,
            wish: state?.wish?.filter((item) => item?.productId !== productIdToRemove),
        }
    }


    if (action?.type === "INCREMENT_WISH_QUANTITY") {
        return {
            ...state,
            wish: state?.wish?.map((item) =>
                item?.productId === action?.payload?.productId
                    ? { ...item, quantity: item?.quantity + 1 }
                    : item
            ),
        }
    }

    if (action?.type === "DECREMENT_WISH_QUANTITY") {
        return {
            ...state,
            wish: state?.wish?.map((item) =>
                item?.productId === action?.payload?.productId && item?.quantity > 1
                    ? { ...item, quantity: item?.quantity - 1 }
                    : item
            ),
        }

    }

}

export default WishReducer