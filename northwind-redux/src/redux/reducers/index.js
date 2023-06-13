import {combineReducers} from 'redux';
import changeCategoryReducer from './changeCategoryReducer';
import getCategoriesReducer from './getCategoriesReducer';
const rootReducer = combineReducers({
    changeCategoryReducer,
    getCategoriesReducer
});

export default rootReducer;