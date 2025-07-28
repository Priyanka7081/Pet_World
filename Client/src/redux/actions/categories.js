import { getAllCategories } from "../../services/categories"
import { GET_ALL_CATEGORIES } from "../actionTypes/categories"

export const fetchAllCategories = ({dispatch})=>{
    getAllCategories()
    .then(({data}) =>{
        dispatch({
            type: GET_ALL_CATEGORIES,
            payload: data,
        });
    }).catch(error =>{
        console.log(error);
        
           dispatch({
            type: GET_ALL_CATEGORIES,
            payload: [],
        });
    });
}