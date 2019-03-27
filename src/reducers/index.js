// REDUCERS
import initialState from './initialState';


// IMPORT ACTION TYPES
import { 
  SELECT_ROVER,
  LAND_ROVER,
  MOVE_ROVER
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
    case LAND_ROVER:
      const updatedRovers = state.rovers;
      updatedRovers[state.selectedRover].hasLanded = true;
      console.log("LAND ROVER REDUCER RUNS");
      return {
        ...state,
        rovers: updatedRovers
      }
    default:
      return state;
  }
}