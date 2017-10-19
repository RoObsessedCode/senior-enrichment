import axios from 'axios';

const GET_SINGLE_STUDENT = 'GET_SINGLE_STUDENT';

//ACTION CREATOR

export function getSingleStudent (student) {
  const action = { type: GET_SINGLE_STUDENT, student};
  return action;
}

//THUNK

export function fetchSingleStudent (id) {
  return function thunk (dispatch) {
    return axios.get(`/api/students/${id}`)
      .then(res => res.data)
      .then(student => {
        const action = getSingleStudent(student);
        dispatch(action);
      });
  };
}

export default function reducer (state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_STUDENT:
      return action.student;

    default:
      return state;
  }
}
