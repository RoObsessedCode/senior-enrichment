import axios from 'axios';

const GET_STUDENTS_LIST = 'GET_STUDENTS_LIST';

//ACTION CREATOR

export function getStudentsList (students) {
  const action = { type: GET_STUDENTS_LIST, students};
  return action;
}

//THUNK

export function fetchStudentsList (campusId) {
  return function thunk (dispatch) {
    return axios.get(`/api/campuses/${campusId}/students`)
      .then(res => res.data)
      .then(students => {
        const action = getStudentsList(students);
        dispatch(action);
      });
  };
}

export default function reducer (state = [], action) {
  switch (action.type) {
    case GET_STUDENTS_LIST:
      return action.students;

    default:
      return state;
  }
}
