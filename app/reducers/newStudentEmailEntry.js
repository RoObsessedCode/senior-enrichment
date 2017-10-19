const WRITE_STUDENT_EMAIL = 'WRITE_STUDENT_EMAIL';

//ACTION CREATOR
export function writeStudentEmail(studentEmail) {
  const action = { type: WRITE_STUDENT_EMAIL, studentEmail };
  return action;
}

//REDUCER

export default function reducer(state = '', action) {
  switch (action.type) {
    case WRITE_STUDENT_EMAIL:
      return action.studentEmail;
    default:
      return state;
  }
}
