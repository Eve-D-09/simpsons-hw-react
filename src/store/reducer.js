import { initialState } from "./initialState";
import {
  API_DATA,
  SET_SEARCH_INPUT,
  SET_SORT_CHARACTERS,
  
  SET_DELETE,
  SET_ON_TOGGLE,
} from "./types";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case API_DATA:
      return { ...state, simpsons: action.payload };

    case SET_SEARCH_INPUT:
      return { ...state, searchInput: action.payload };

    case SET_SORT_CHARACTERS:
      return { ...state, sortCharacters: action.payload };

   
    case SET_DELETE:
      const indexOf = state.simpsons.findIndex((char) => {
        return char.id === action.payload;
      });
      const simpsons = [...state.simpsons];
      simpsons.splice(indexOf, 1);
      return {
        ...state,
        simpsons,
      };

      case SET_ON_TOGGLE: {
      const indexOf = state.simpsons.findIndex((char) => {
        return char.id === action.payload;
      });
      const simpsons  = [...state.simpsons];
      
      simpsons[indexOf].liked = !simpsons[indexOf].liked;
      return {
        ...state, simpsons,
      }
    }

    default:
      console.log("reducer started or INVALID reducer type");
      return state;
  }
}
