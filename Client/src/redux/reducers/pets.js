import { getPetsByCategory } from "../../services/pets";
import {
  GET_ALL_PETS,
  GET_PET_BY_ID,
  GET_PETS_BY_CATEGORY,
} from "../actionTypes/pets";
const intialState = {
  allPets: [],
  petsByCategory: [],
  selectedPet: {},
};

const petsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PETS:
      return {
        ...state,
        allPets: payload,
      };

    case GET_PETS_BY_CATEGORY:
      return {
        ...state,
        petsByCategory: payload,
      };

    case GET_PET_BY_ID:
      return {
        ...state,
        selectedPet: payload,
      };

    default:
      return state;
  }
};
export default petsReducer;
