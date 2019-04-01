// below is the initial state of an app
let start = {
  selectedRover: 2,
  moveInstructions: "",
  roversMoved: 0, // counter
  rovers: [
    {
      hasLanded: false,
      hasBeenDestroyed: false,
      x: -1,
      y: -1,
      dir: 'N',
    },
    {
      hasLanded: false,
      hasBeenDestroyed: false,
      x: -1,
      y: -1,
      dir: 'N',
    },
    {
      hasLanded: false,
      hasBeenDestroyed: false,
      x: -1,
      y: -1,
      dir: 'N',
    },
    {
      hasLanded: false,
      hasBeenDestroyed: false,
      x: -1,
      y: -1,
      dir: 'N',
    }
  ]
}

export default function() {
  return start;
}