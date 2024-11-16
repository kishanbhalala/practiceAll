import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/WishReducer"

const WishContext = createContext();


const getLocalWishData = () => {
    let localWishData = localStorage.getItem("cakewish");
    const parseData = JSON.parse(localWishData);
    if (!Array.isArray(parseData)) return [];
    return parseData;
}

const initialState = {
    wish: getLocalWishData(),
}

const WishProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const wishAdd = (productDetails) => {
        dispatch({ type: "WISH_LIST_ADD", payload: productDetails })
        // console.log("context wish add", productDetails);
    }

    const wishRemoveItem = (productId) => {
        dispatch({ type: "WISH_REMOVE_ITEM", payload: { productId } });
        // console.log("context remove cart", productId);
    };

    const incrementWishQuantity = (productId) => {
        dispatch({ type: "INCREMENT_WISH_QUANTITY", payload: { productId } });
        // console.log("incre", productId);
    };

    const decrementWishQuantity = (productId) => {
        dispatch({ type: "DECREMENT_WISH_QUANTITY", payload: { productId } });
        // console.log("decre", productId);
    };

   
    useEffect(() => {
        localStorage.setItem("cakewish", JSON.stringify(state?.wish))
    }, [state?.wish])

    return <WishContext.Provider value={{ ...state, wishAdd, wishRemoveItem, incrementWishQuantity, decrementWishQuantity }}>
        {children}
    </WishContext.Provider>
}

const useWishContext = () => {
    return useContext(WishContext);
}

export { WishProvider, useWishContext }