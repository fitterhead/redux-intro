import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './cart/slice'
import { productSlice } from './product/slice'

// Store created by configureStore method that take an object as params
//the object has key name is reducer and value is an object 
//that has two value, first value key name is cart, value is the reducer method of 
//reducer cartSlice export from slice
//...
/// export store
const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        product: productSlice.reducer
    },
})

export default store