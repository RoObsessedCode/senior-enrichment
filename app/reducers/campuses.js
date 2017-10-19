// import axios from 'axios';
//import socket from '../socket';
import axios from 'axios';
//ACTION_TYPES

const GET_CAMPUS = 'GET_CAMPUS';
const GET_CAMPUSES = 'GET_CAMPUSES';

//ACTION_CREATERS

export function getCampus (campus) {
  const action = { type: GET_CAMPUS, campus };
  return action;
}

export function getCampuses (campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

// THUNK CREATORS
export function fetchCampuses () {
  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action);
      });
  };
}

export function postCampus (campus, history) {
  return function thunk (dispatch) {
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(newCampus => {
        dispatch(getCampus(newCampus));
        history.push(`/campuses/${newCampus.id}`);
      });
  };
}



export default function reducer (state = [], action) {
  console.log(action)
  switch (action.type) {

    case GET_CAMPUSES:
      console.log('setting state')
      return action.campuses;

    case GET_CAMPUS:
      return state.concat(action.campus);


    default:
      return state;
  }

}

