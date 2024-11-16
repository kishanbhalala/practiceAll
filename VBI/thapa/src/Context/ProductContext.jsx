import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios';
import reducer from '../reducer/ProductReducer'

const AppContext = createContext()

const getLocalCartData = () => {

    let LocalCartData = localStorage.getItem("e-commm");
    const parseData = JSON.parse(LocalCartData);
    if (!Array.isArray(parseData)) return [];
    return parseData;
};

const API = "https://api.pujakaitem.com/api/products"

const AppProvider = ({ children }) => {

    const initialState = {
        isLoading: false,
        isError: false,
        products: [],
        featureProducts: [],

        isSingleLoading: false,
        singleProduct: {},

        recentlyViewed: getLocalCartData(),
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            // console.log("axios data get", res);
            const products = await res.data;
            // console.log(products);
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    }


    // my 2nd api call for single product page 
    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(url);
            const SingleProduct = await res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: SingleProduct });
            dispatch({ type: "ADD_TO_RECENTLY_VIEWED", payload: SingleProduct });
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" });
        }
    }

    useEffect(() => {
        getProducts(API)
    }, [])

    useEffect(() => {
        localStorage.setItem("e-commm", JSON.stringify(state.recentlyViewed))
    }, [state.recentlyViewed])



    return <AppContext.Provider value={{ ...state, getSingleProduct }}>
        {children}
    </AppContext.Provider>
}

// custom hook 

const useProductContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, useProductContext }


