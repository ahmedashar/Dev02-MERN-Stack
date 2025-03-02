import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState:{
        value: 0,
    },
    reducers:{
        increment: (state)=>{
            state.value += 1;
        },
        decrement: (state)=>{
            state.value -= 1;
        },
        incrementByFive: (state, action)=>{
            // console.log(action, "<-- action")
            state.value += action.payload;
        },
        resetCounter: (state) =>{
            state.value = 0;
        }
    }
})

export const { increment, decrement, incrementByFive, resetCounter } = counterSlice.actions;
export default counterSlice.reducer;