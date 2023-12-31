import * as actionTypes from '../../redux/actions/actionTypes'
import initialState from './initialState'

export default function getProductsReducer(state=initialState.products,action) {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return action.payload
        default:
            return state;
    }
}