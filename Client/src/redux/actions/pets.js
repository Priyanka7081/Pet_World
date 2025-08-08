import { getAllPets, getPetsByCategory, getPetsById } from "../../services/pets";
import { GET_ALL_PETS, GET_PET_BY_ID, GET_PETS_BY_CATEGORY } from "../actionTypes/pets";


export const fetchAllPets = ({dispatch})=>{
    getAllPets()
    .then(({data}) =>{
        dispatch({
            type: GET_ALL_PETS,
            payload: data,
        });
    }).catch(error =>{
        console.log(error);
        
           dispatch({
            type: GET_ALL_PETS,
            payload: [],
        });
    });
}

export const fetchPetsBYCategory = ({dispatch,payload})=>{
    getPetsByCategory(payload)
    .then(({data}) =>{
        dispatch({
            type: GET_PETS_BY_CATEGORY,
            payload: data,
        });
    }).catch(error =>{
        console.log(error);
        
           dispatch({
            type: GET_PETS_BY_CATEGORY,
            payload: [],
        });
    });
}

export const fetchPetsById = ({dispatch,payload})=>{
    getPetsById(payload)
    .then(({data}) =>{
        dispatch({
            type: GET_PET_BY_ID,
            payload: data,
        });
    }).catch(error =>{
        console.log(error);
        
           dispatch({
            type: GET_PET_BY_ID,
            payload: [],
        });
    });
}