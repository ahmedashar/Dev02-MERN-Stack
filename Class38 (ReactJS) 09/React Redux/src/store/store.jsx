import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        cart: cartReducer,
    }
})


// redux hooks
// 1. useSelector
// definition: useSelector is a hook that takes a selector function as an argument.
// 2. useDispatch
// definition: useDispatch is a hook that returns a reference to the dispatch function from the Redux store.
