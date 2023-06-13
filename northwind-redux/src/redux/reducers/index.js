import {combineReducers} from 'redux';
import changeCategoryReducer from './changeCategoryReducer';
import getCategoriesReducer from './getCategoriesReducer';
import getProductsReducer from './getProductsReducer';
const rootReducer = combineReducers({
    changeCategoryReducer,
    getCategoriesReducer,
    getProductsReducer
});

export default rootReducer;