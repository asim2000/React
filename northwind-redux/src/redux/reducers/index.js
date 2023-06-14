import {combineReducers} from 'redux';
import changeCategoryReducer from './changeCategoryReducer';
import getCategoriesReducer from './getCategoriesReducer';
import getProductsReducer from './getProductsReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    changeCategoryReducer,
    getCategoriesReducer,
    getProductsReducer,
    cartReducer
});

export default rootReducer;