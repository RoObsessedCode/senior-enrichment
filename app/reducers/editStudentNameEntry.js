const EDIT_STUDENT_NAME = 'EDIT_STUDENT_NAME';

//ACTION CREATOR
export function editStudentName(student) {
  const action = { type: EDIT_STUDENT_NAME, student};
  return action;
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case EDIT_STUDENT_NAME:
      return (state.filter(student => student.id !== action.student.id)).concat(action.student);

    default:
      return state;
  }
}
