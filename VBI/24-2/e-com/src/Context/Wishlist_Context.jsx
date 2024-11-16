import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/WishlistReducer'

const WishlistContext = createContext();

const getLocalCartData = () => {

    // let LocalCartData = localStorage.getItem("e-com");
    // if (LocalCartData == []) {
    //     return [];
    // } else {
    //     return JSON.parse(LocalCartData)
    // }
    let LocalCartData = localStorage.getItem("e-comm");
    const parseData = JSON.parse(LocalCartData);
    if (!Array.isArray(parseData)) return [];
    return parseData;
};

const initialState = {
    // cart: [],
    cart: getLocalCartData(),
}



const WishListProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const wislistAdd = (id, color, product) => {
        // console.log("Wishlist items: ", product);
        dispatch({ type: "WISHLIST_ADD", payload: { id, color, product } })
    };

    const wishRemoveItem = (id) => {
        dispatch({ type: "WISHLIST_REMOVE", payload: id })
    }

    useEffect(() => {
        localStorage.setItem("e-comm", JSON.stringify(state.cart))
    }, [state.cart])
    
    return (
        <WishlistContext.Provider value={{ ...state, wislistAdd, wishRemoveItem }}>
            {children}
        </WishlistContext.Provider>
    );
};

const useWishContext = () => {
    return useContext(WishlistContext)
}

export { WishListProvider, useWishContext };