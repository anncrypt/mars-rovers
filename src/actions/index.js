// ACTION CREATORS
export const SELECT_ROVER = 'SELECT_ROVER';
export const LAND_ROVER = 'LAND_ROVER';
// export const MOVE_ROVER = 'MOVE_ROVER';

export const selectRover = (selectedRover) => {
  // Return an action
  return {
    type: SELECT_ROVER,
    payload: selectedRover, // index of the selected rover
  };
};

export const landRover = () => {
  // Return an action
  return {
    type: LAND_ROVER
  };
};