import * as actionTypes from '../../redux/actions/actionTypes'

export function getProducts(category) {
    const url = 'http://localhost:3000/products'
    return function(dispatch) {
        fetch(url)
        .then(response =>response.json())
        .then(result =>{
            const newProducts = category.id ? result.filter(p=>p.categoryId === category.id) : result
            dispatch(getProductsSuccess(newProducts))
        })
    }
}

function getProductsSuccess(products) {
    return {
        type:actionTypes.GET_PRODUCTS_SUCCESS,
        payload:products
    }
}