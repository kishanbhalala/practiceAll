import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/CartReducer';


const CartContext = createContext();

const getLocalCartData = () => {

    let LocalCartData = localStorage.getItem("e-com");
    // if (LocalCartData == []) {
    //     return [];
    // } else {
    //     return JSON.parse(LocalCartData)
    // }
    const parseData = JSON.parse(LocalCartData);
    if (!Array.isArray(parseData)) return [];
    return parseData;
};

const initialState = {
    // cart: [],
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fee: 50000,
}

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addCart = (id, color, amount, product) => {
        // console.log({"adding pro fom wishlist": id, color, amount, product});
        // console.log("addint in cart from wishlist: ", product);
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } })
    }

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    }

    // increment / decrement 
    const increment = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id })
    }
    const decrement = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id })
    }

    // add the data in localStorage
    // get vs set 
    useEffect(() => {
        dispatch({ type: "CART_ICON_VALUE" });
        dispatch({ type: "CART_TOTAL_PRICE" });
        localStorage.setItem("e-com", JSON.stringify(state.cart))
    }, [state.cart])

    return <CartContext.Provider value={{ ...state, addCart, removeItem, clearCart, increment, decrement }}>
        {children}
    </CartContext.Provider>
};

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext }