const EDIT_CAMPUS_NAME = 'EDIT_CAMPUS_NAME';

//ACTION CREATOR
export function editCampusName(campus) {
  const action = { type: EDIT_CAMPUS_NAME, campus};
  return action;
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case EDIT_CAMPUS_NAME:
      return (state.filter(campus => campus.id !== action.campus.id)).concat(action.campus);

    default:
      return state;
  }
}
