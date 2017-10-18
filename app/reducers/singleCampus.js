import axios from 'axios';

const GET_SINGLE_CAMPUS = 'GET_SINGLE_CAMPUS';

//ACTION CREATOR

export function getSingleCampus (campus) {
  const action = { type: GET_SINGLE_CAMPUS, campus};
  return action;
}

//THUNK

export function fetchSingleCampus (id) {
  return function thunk (dispatch) {
    return axios.get(`/api/campuses/${id}`)
      .then(res => res.data)
      .then(campus => {
        const action = getSingleCampus(campus);
        dispatch(action);
      });
  };
}

export default function reducer (state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_CAMPUS:
      return action.campus;

    default:
      return state;
  }
}

