import {combineReducers} from '@reduxjs/toolkit'
import categoriesReducer from './categories'
import petsReducer from './pets';


const rootReducer = combineReducers({
    categories: categoriesReducer,
    pets: petsReducer,
});

export default rootReducer