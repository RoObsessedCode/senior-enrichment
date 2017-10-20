const EDIT_STUDENT_EMAIL = 'EDIT_STUDENT_EMAIL';

//ACTION CREATOR
export function editStudentEmail(student) {
  const action = { type: EDIT_STUDENT_EMAIL, student};
  return action;
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case EDIT_STUDENT_EMAIL:
      return (state.filter(student => student.id !== action.student.id)).concat(action.student);

    default:
      return state;
  }
}
