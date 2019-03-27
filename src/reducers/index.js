// REDUCERS
import initialState from './initialState';


// IMPORT ACTION TYPES
import { 
  SELECT_ROVER,
  // ANOTHER_ACTION,
  // ANOTHER_ACTION_2,
} from '../actions';


// MAIN REDUCER
export default (state = initialState(), action) => {
  switch(action.type) {
    case SELECT_ROVER:
      console.log("SELECT ROVER REDUCER RUNS");
      return {
        ...state,
        selectedRover: action.payload, // index of the selected rover
      }
    default:
      return state;
  }
}