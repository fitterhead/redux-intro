import {
    createSlice
} from '@reduxjs/toolkit'


//store cartSlice created by function createSlice that take 
// reducer as parameter 
// the reducer is an object with 3 value:
// 1, a string with key is name and "cart" is string value
//initialaState, an object with an array name product, and a number object called totalprice
// an object called reducer, contain 2 method: addToCart and removeCart
//method addTocard receive state and action as parameter 
//inside function method, create variable newProduct contain extraction data
//off object payload inside action object 
// for each object inside products array inside state object, 
//if the id value inside payload object insde action object 
// differect than the id of the targeted object inside products array
//inside initialState object, it quantity will add 1 more.
//.... same with removieCart method 
// extract the list of actions from cartSlice store
// extract the list of reducers from cartSlice store
// extract addTocard method and removeCart method from object actions extracted from 
//reducer cartSlice

export const cartSlice = createSlice({
    name: "cart",
    //state.cart.products
    initialState: {
        products: [
            { id: "p1", title: "Product 1", price: 0, qty: 0 },
            { id: "p2", title: "Product 2", price: 0, qty: 0 },
        ],
        totalPrice: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const newProduct = action.payload;
            state.products.forEach((cartProduct) => {
                if (cartProduct.id === newProduct.id) {
                    cartProduct.qty += 1;
                    cartProduct.price += newProduct.price;
                }
            });
            state.totalPrice += newProduct.price;
        },
        removeCart: (state, action) => {
            const removedProduct = action.payload;
            state.products.forEach((cartProduct) => {
                if (cartProduct.id === removedProduct.id && cartProduct.qty > 0) {
                    cartProduct.qty -= 1;
                    cartProduct.price -= removedProduct.price;
                    state.totalPrice -= removedProduct.price;
                }
            })

        }
    }
})
const { actions, reducers } = cartSlice
export const { addToCart, removeCart } = actions
// export default reducers