// REDUCERS
import initialState from './initialState';
import {
  NUMBER_HORIZONTAL_CELLS,
  NUMBER_VERTICAL_CELLS,
} from '../util/constants';


// IMPORT ACTION TYPES
import { 
  SELECT_ROVER,
  LAND_ROVER,
  ROTATE_ROVER_RIGHT,
  ROTATE_ROVER_LEFT,
  MOVE_ROVER_FORWARD
} from '../actions';


// MAIN REDUCER
export default (state = initialState(), action) => {
  const updatedRovers = state.rovers;
  const currentDirection = updatedRovers[state.selectedRover].dir;

  switch(action.type) {
    case SELECT_ROVER:
      return {
        ...state,
        selectedRover: action.payload, // index of the selected rover
      }
    case LAND_ROVER:
      updatedRovers[state.selectedRover].hasLanded = true;
      let landingX = action.payload.x;
      let landingY = action.payload.y;
      let landingDir = action.payload.direction.toUpperCase();
      let acceptableLandingValue = ['N','W','S','E'].includes(landingDir);

      if (landingX < 0 || landingX > NUMBER_HORIZONTAL_CELLS || landingY < 0 || landingY >= NUMBER_VERTICAL_CELLS || !acceptableLandingValue) {
        updatedRovers[state.selectedRover].hasBeenDestroyed = true;
        updatedRovers[state.selectedRover].x = -1;
        updatedRovers[state.selectedRover].y = -1;
      } else {
        updatedRovers[state.selectedRover].x = action.payload.x;
        updatedRovers[state.selectedRover].y = action.payload.y;
        updatedRovers[state.selectedRover].dir = action.payload.direction.toUpperCase();
      }

      return {
        ...state,
        rovers: updatedRovers,
        roversMoved: state.roversMoved+1,
      }

    case ROTATE_ROVER_RIGHT:
      let nextDirection = '';
      switch(currentDirection) {
        case 'E':
        nextDirection = 'S';
        break;
        case 'S':
        nextDirection = 'W';
        break;
        case 'W':
        nextDirection = 'N';
        break;  
        case 'N':
        default:
          nextDirection = 'E';
      }
      
      updatedRovers[state.selectedRover].dir = nextDirection;

      return {
        ...state,
        rovers: updatedRovers,
        roversMoved: state.roversMoved + 1,
      }
    case ROTATE_ROVER_LEFT:
      nextDirection = '';
      switch (currentDirection) {
        case 'E':
          nextDirection = 'N';
          break;
        case 'S':
          nextDirection = 'E';
          break;
        case 'W':
          nextDirection = 'S';
          break;
        case 'N':
        default:
          nextDirection = 'W';
      }

      updatedRovers[state.selectedRover].dir = nextDirection;
      return {
        ...state,
        rovers: updatedRovers,
        roversMoved: state.roversMoved + 1,
      }
    case MOVE_ROVER_FORWARD:
      let x = updatedRovers[state.selectedRover].x;
      let y = updatedRovers[state.selectedRover].y;
      let isChangingX;

      switch (currentDirection) {
        case 'E':
          x = x + 1;
          isChangingX = true;
          break;
        case 'S':
          y = y - 1;
          isChangingX = false;
          break;
        case 'W':
          x = x - 1;
          isChangingX = true;
          break;
        case 'N':
        default:
          y = y + 1;
          isChangingX = false;
      }

      
      if (isChangingX) {
        if (x < 0 || x > NUMBER_HORIZONTAL_CELLS) {
          updatedRovers[state.selectedRover].hasBeenDestroyed = true;
          updatedRovers[state.selectedRover].x = -1;
          updatedRovers[state.selectedRover].y = -1;
        } else {
          updatedRovers[state.selectedRover].x = x;
        }
      } else {
        if (y < 0 || y >= NUMBER_VERTICAL_CELLS) {
          updatedRovers[state.selectedRover].hasBeenDestroyed = true;
          updatedRovers[state.selectedRover].x = -1;
          updatedRovers[state.selectedRover].y = -1;
        } else {
          updatedRovers[state.selectedRover].y = y;
        }
      }

      return {
        ...state,
        rovers: updatedRovers,
        roversMoved: state.roversMoved + 1,
      }
    default:
      return state;
  }
}