
const WishListReducer = (state, action) => {

    if (action.type === "WISHLIST_ADD") {
        let { id, color, product } = action.payload;
        // console.log("wish", product);

        // (product.image && product.image[0] && product.image[0].url)
        let wishProduct;
        if (product?.image[0]?.url) {
            wishProduct = {
                id: id + color,
                name: product?.name,
                color,
                image: product?.image[0]?.url,
                price: product?.price,
                max: product?.stock,
                amount: 1
            };
        } else {
            wishProduct = {
                id: id + color,
                name: product?.name,
                color,
                image: product?.image,
                price: product?.price,
                max: product?.stock,
                amount: 1
            };
        }

        return {
            ...state,
            cart: [...state.cart, wishProduct],
        }
    }


    if (action.type === "WISHLIST_REMOVE") {
        return {
            ...state,
            cart: state.cart.filter((curEle) => curEle.id !== action.payload),
        }
    }

}

export default WishListReducer