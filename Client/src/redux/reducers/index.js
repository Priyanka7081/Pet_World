import {combineReducers} from '@reduxjs/toolkit'
import categoriesReducer from './categories'


const rootReducer = combineReducers({
    categories: categoriesReducer
});

export default rootReducer