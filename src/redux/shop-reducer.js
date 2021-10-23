import {act} from "@testing-library/react";

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const LOAD_CURRENT_ITEM = 'LOAD_CURRENT_ITEM'
const ADJUST_QTY = 'ADJUST_QTY'

const initialState = {
    products: [
        {
            id: 1,
            price: 15,
            title: "Fork",
            description: "Such a good product",
            image: "https://images-na.ssl-images-amazon.com/images/I/71RRthv0TkL._AC_SL1500_.jpg",
        },
        {
            id: 2,
            price: 25,
            title: "Spoon",
            description: "Such a good product",
            image: "https://images-na.ssl-images-amazon.com/images/I/618F1Xwm49L._AC_SL1500_.jpg",
        },
        {
            id: 3,
            price: 125,
            title: "Towel",
            description: "Such a good product",
            image: "https://i5.walmartimages.com/asr/4c40300f-aca0-4f37-b310-770c4f19f50e_3.748ce843991112a63e835f8f934c07c6.jpeg",
        },

    ],
    cart: [],
    currentItem: null
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const currentItem = state.products.find(product => product.id === action.payload.id)
            const cartIn = state.cart.find(product => product.id === action.payload.id)

            return {
                ...state,
                cart: cartIn
                    ? state.cart.map(product => product.id === action.payload.id
                        ? {...product, qty: product.qty + 1}
                        : product)
                    : [...state.cart, {...currentItem, qty: 1}]
            }
        case REMOVE_FROM_CART:
            debugger
            const itemToDelete = state.cart.find(item => item.id === action.payload.id)
            return {...state, cart: state.cart.filter(item => item.id !== action.payload.id)}
        case LOAD_CURRENT_ITEM:
            return {...state, currentItem: action.item}
        case ADJUST_QTY:
            return {...state}
        default:
            return state
    }
}

export const addToCart = (itemID) => ({type: ADD_TO_CART, payload: {id: itemID}})
export const removeFromCart = (itemID) => ({type: REMOVE_FROM_CART, payload: {id: itemID}})
export const loadCurrentItem = (item) => ({type: LOAD_CURRENT_ITEM, item})
export const adjustQty = () => ({type: ADJUST_QTY})

export default shopReducer
//
// case ADD_TO_CART:
//     const currentItem = state.products.find(product => product.id === action.payload.id)
// const cartIn = state.cart.find(product => product.id === action.id)
// return {...state,
//     cart: cartIn
//         ? state.cart.map(item => item.id === action.id
//             ? {...item, qty: item.qty + 1}
//             : item)
//         : [...state.cart, {currentItem, qty: 1} ]
// }