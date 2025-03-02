import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        cart: [],
    },
    reducers:{
        addToCart: (state, action)=>{
            const {id, title, price, image} = action.payload;
            const existingProduct = state.cart.find(item => item.id == id);
            if(existingProduct){
                existingProduct.quantity += 1;
            }else{
                state.cart.unshift({id, title, price, image, quantity: 1})
            }
        },
        removeFromCart: (state,action)=>{
           const {id} = action.payload;
           state.cart = state.cart.filter(item => item.id != id); 
        },
        clearAll: (state)=>{
            state.cart = [];
        }
        
    }
})

export const {addToCart,removeFromCart,clearAll } = cartSlice.actions;
export default cartSlice.reducer;