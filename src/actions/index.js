// ACTION CREATORS
export const SELECT_ROVER = 'SELECT_ROVER';

export const selectRover = (selectedRover) => {
  // Return an action
  return {
    type: SELECT_ROVER,
    payload: selectedRover, // index of the selected rover
  };
};