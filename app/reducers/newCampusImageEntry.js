//Action Type
const WRITE_CAMPUS_IMAGE = 'WRITE_CAMPUS_IMAGE';

//ACTION CREATORS

export function writeCampusImage(campusImage) {
  const action = { type: WRITE_CAMPUS_IMAGE, campusImage };
  return action;
}

//REDUCER

export default function reducer(state = '', action) {
  switch (action.type) {

    case WRITE_CAMPUS_IMAGE:
      return action.campusImage;

    default:
      return state;
  }
}
