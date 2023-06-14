import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function addToCartReducer(state=initialState.cart,action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            let addedItem = state.find(item => item.product.id === action.payload.product.id)
            if(addedItem) {
                let newCart = state.map(item => {
                    if(item.product.id === action.payload.product.id) {
                        return Object.assign({},item,{quantity:action.payload.quantity+item.quantity})
                    }
                    return item
                })
                console.log(newCart)
                return newCart
            }
            console.log([...state,{...action.payload}])
            return [...state,{...action.payload}]
        case actionTypes.REMOVE_FROM_CART:
            let newCart = state.filter(item => item.product.id !== action.payload.id)
            return newCart
        default:
            return state;
    }
}