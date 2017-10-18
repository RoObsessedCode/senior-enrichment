import axios from 'axios';

const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';
//const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES';
const DELETE_STUDENT = 'DELETE_STUDENT';


//ACTION CREATOR

export function getAllStudents (students) {
  const action = { type: GET_ALL_STUDENTS, students };
  return action;
}

export function deleteStudentSuccess (studentId) {
  const action = { type: DELETE_STUDENT, studentId};
  return action;
}
// export function getAllCampuses (campuses) {
//   const action = { type: GET_ALL_CAMPUSES, campuses};
//   return action;
// }

//THUNK

export function fetchAllStudents () {
  return function thunk (dispatch) {
    return axios.get(`/api/students`)
      .then(res => res.data)
      .then(students => {
        const action = getAllStudents(students);
        dispatch(action);
      })

  };
}

export function deleteStudent (studentId) {
  return function thunk (dispatch) {
    dispatch(deleteStudentSuccess(studentId));
    return axios.delete(`/api/students/${studentId}`)
      .catch(err => console.error(`Removing student: ${studentId} unsuccesful`, err));

  };
}


export default function reducer (state = [], action) {

  switch (action.type) {
    case GET_ALL_STUDENTS:
      return action.students;
    case DELETE_STUDENT:
      return state.filter(student => student.id !== action.studentId);
      //Array.prototype.filter creates a new array

    default:
      return state;
  }

}
