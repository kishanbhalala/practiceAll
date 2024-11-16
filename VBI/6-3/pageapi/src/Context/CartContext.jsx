import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/CartReducer'

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("cakecart");
    const parseData = JSON.parse(localCartData);
    if (!Array.isArray(parseData)) return [];
    return parseData;
}

const initialState = {
    cart: getLocalCartData(),
}

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addtocart = (productDetails) => {
        dispatch({ type: "ADD_TO_CART", payload: productDetails })
        // console.log("context Add cart", productDetails);
    }

    const removeCartItem = (productId) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: { productId } });
        // console.log("context remove cart", productId);
    };

    const incrementQuantity = (productId) => {
        dispatch({ type: "INCREMENT_QUANTITY", payload: { productId } });
        // console.log("incre", productId);
    };

    const decrementQuantity = (productId) => {
        dispatch({ type: "DECREMENT_QUANTITY", payload: { productId } });
        // console.log("decre", productId);
    };

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    }

    useEffect(() => {
        localStorage.setItem("cakecart", JSON.stringify(state?.cart))
    }, [state?.cart])

    return <CartContext.Provider value={{ ...state, addtocart, removeCartItem, incrementQuantity, decrementQuantity, clearCart }}>
        {children}
    </CartContext.Provider>;
}

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };