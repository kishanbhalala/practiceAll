
const CartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, product } = action.payload;
        // console.log("from cart reducer: ", product);

        // tackle the existing product 
        let existingProduct = state.cart.find((curEle) => curEle.id === id + color);

        if (existingProduct) {
            let updatedProduct = state.cart.map((curEle) => {
                if (curEle.id === id + color) {
                    let newAmount = curEle.amount + amount;
                    if (newAmount >= curEle.max) {
                        newAmount = curEle.max;
                    }
                    return {
                        ...curEle,
                        amount: newAmount,
                    };
                } else {
                    return curEle;
                }
            });
            return {
                ...state,
                cart: updatedProduct,
            }
        } else {
           
            let cartProduct;

            if (product?.image && product.image[0]?.url) {
                cartProduct = {
                    id: id + color,
                    name: product.name,
                    color,
                    amount,
                    image: product.image[0].url,
                    price: product.price,
                    max: product.stock,
                };
            } else {
                cartProduct = {
                    id: id + color,
                    name: product.name,
                    color,
                    amount,
                    image: product.image,
                    price: product.price,
                    max: product.stock,
                };
            }

            return {
                ...state,
                cart: [...state.cart, cartProduct],
            }
        }
    }

   
    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter((curEle) => {
            return curEle.id !== action.payload;
        })
        return {
            ...state,
            cart: updatedCart,
        }
    }

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
        };
    }

    // increment / decrement 
    if (action.type === "SET_DECREMENT") {
        let updatData = state.cart.map((curEle) => {
            if (curEle.id === action.payload) {
                // console.log(curEle);
                let decAmount = curEle.amount - 1;

                if (decAmount <= 1) {
                    decAmount = 1;
                }
                return {
                    ...curEle,
                    amount: decAmount,
                };
            } else {
                return curEle;
            }
        });
        return { ...state, cart: updatData };
    }
    if (action.type === "SET_INCREMENT") {
        let updatData = state.cart.map((curEle) => {
            if (curEle.id === action.payload) {
                // console.log(curEle);
                let incAmount = curEle.amount + 1;

                if (incAmount >= curEle.max) {
                    incAmount = curEle.max;
                }
                return {
                    ...curEle,
                    amount: incAmount,
                };
            } else {
                return curEle;
            }
        });
        return { ...state, cart: updatData };
    }

    if (action.type === "CART_ICON_VALUE") {
        let updatItemVal = state.cart.reduce((acc, curEle) => {
            let { amount } = curEle;
            acc = acc + amount;

            return acc;
        }, 0);

        return {
            ...state,
            total_item: updatItemVal,
        };
    }

    if (action.type === "CART_TOTAL_PRICE") {
        let total_price = state.cart.reduce((acc, curEle) => {
            let { price, amount } = curEle;

            acc = acc + price * amount;
            return acc;
        }, 0);
        return {
            ...state,
            total_price,
        }
    }



    return state;
}

export default CartReducer
