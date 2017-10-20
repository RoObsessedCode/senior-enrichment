const EDIT_CAMPUS_IMAGE = 'EDIT_CAMPUS_IMAGE';

//ACTION CREATOR
export function editCampusImage(campus) {
  const action = { type: EDIT_CAMPUS_IMAGE, campus};
  return action;
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case EDIT_CAMPUS_IMAGE:
      return (state.filter(campus => campus.id !== action.campus.id)).concat(action.campus);

    default:
      return state;
  }
}
