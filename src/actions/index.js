// ACTION CREATORS
export const SELECT_ROVER = 'SELECT_ROVER';
export const LAND_ROVER = 'LAND_ROVER';
export const ROTATE_ROVER_RIGHT = 'ROTATE_ROVER_RIGHT';
export const ROTATE_ROVER_LEFT = 'ROTATE_ROVER_LEFT';
export const MOVE_ROVER_FORWARD = 'MOVE_ROVER_FORWARD';


export const selectRover = (selectedRover) => {
  // Return an action
  return {
    type: SELECT_ROVER,
    payload: selectedRover, // index of the selected rover
  };
};

export const landRover = (x, y, direction) => {
  // Return an action
  return {
    type: LAND_ROVER,
    payload: {
      x, 
      y,
      direction
    }
  };
};

export const rotateRoverRight = () => {
  // Return an action
  return {
    type: ROTATE_ROVER_RIGHT
  };
};

export const rotateRoverLeft = () => {
  // Return an action
  return {
    type: ROTATE_ROVER_LEFT
  };
};

export const moveRoverForward = () => {
  // Return an action
  return {
    type: MOVE_ROVER_FORWARD
  };
};

