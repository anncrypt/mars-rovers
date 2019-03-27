// below is the initial state of an app
let start = {
  selectedRover: 2,
  moveInstructions: "",
  rovers: [
    {
      hasLanded: false,
      x: -1,
      y: -1,
      dir: 'N',
    },
    {
      hasLanded: false,
      x: -1,
      y: -1,
      dir: 'N',
    },
    {
      hasLanded: false,
      x: -1,
      y: -1,
      dir: 'N',
    },
    {
      hasLanded: false,
      x: -1,
      y: -1,
      dir: 'N',
    }
  ]
}

export default function() {
  return start;
}