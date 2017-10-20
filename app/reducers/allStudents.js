import axios from 'axios';

const GET_STUDENT = 'GET_STUDENT';
const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';
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
export function getStudent (student) {
  const action = { type: GET_STUDENT, student };
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
      .catch(err => console.error(err));

  };
}

export function deleteStudent (studentId) {
  return function thunk (dispatch) {
    dispatch(deleteStudentSuccess(studentId));
    return axios.delete(`/api/students/${studentId}`)
      .catch(err => console.error(`Removing student: ${studentId} unsuccesful`, err));

  };
}

export function postStudent (student, history) {
  return function thunk (dispatch) {
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then(newStudent => {
        dispatch(getStudent(newStudent));
        history.push(`/students/${newStudent.id}`);
      })
      .catch(err => console.error(err));
  }
}

export function updateStudent (id, student, history) {
  return function thunk (dispatch) {
    return axios.put(`/api/students/${id}`, student)
      .then(res => res.data)
      .then(editedStudent => {
        console.log("ediited: ", editedStudent[1][0]);
        dispatch(getStudent(editedStudent[1][0]));
        history.push(`/students/${editedStudent[1][0].id}`);
      })
      .catch(err => console.error(`Updating student: ${student} unsuccesful`, err));
  }
}

export default function reducer (state = [], action) {

  switch (action.type) {
    case GET_ALL_STUDENTS:
      return action.students;
    case GET_STUDENT:
      return state.concat(action.student);
    case DELETE_STUDENT:
      return state.filter(student => student.id !== action.studentId);
      //Array.prototype.filter creates a new array

    default:
      return state;
  }

}
