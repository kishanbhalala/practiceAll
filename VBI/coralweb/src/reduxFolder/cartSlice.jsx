import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        addtocart: (state, action) => {
            state.cart.push(action.payload)
        },
        removetocart: (state, action) => {
            console.log("remove cart function id: ", action.payload.id);
            state.cart = state.cart.filter(x => x?.item?.id !== action.payload.id)
        },
        increment: (state, action) => {
            const index = state.cart.findIndex((item) => item?.item?.id === action.payload.id);
            if (index !== -1) {
                state.cart[index].quantity += 1;
            }
        },
        decrement: (state, action) => {
            const index = state.cart.findIndex((item) => item?.item?.id === action.payload.id);

            if (index !== -1) {
                state.cart[index].quantity -= 1;

                if (state.cart[index].quantity === 0) {
                    state.cart.splice(index, 1);
                }
            }
        }
    }
})

export default cartSlice.reducer;
export const { addtocart, removetocart, increment, decrement } = cartSlice.actions; 