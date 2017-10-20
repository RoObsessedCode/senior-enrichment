// import axios from 'axios';
//import socket from '../socket';
import axios from 'axios';
//ACTION_TYPES

const GET_CAMPUS = 'GET_CAMPUS';
const GET_CAMPUSES = 'GET_CAMPUSES';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

//ACTION_CREATERS

export function getCampus (campus) {
  const action = { type: GET_CAMPUS, campus };
  return action;
}

export function getCampuses (campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

export function deleteCampusSuccess (campusId) {
  const action = { type: DELETE_CAMPUS, campusId};
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

export function deleteCampus (campusId) {
  return function thunk (dispatch) {
    dispatch(deleteCampusSuccess(campusId));
    return axios.delete(`/api/campuses/${campusId}`)
      .catch(err => console.error(`Removing campus: ${campusId} unsuccesful`, err));

  };
}

export function postCampus (campus, history) {
  return function thunk (dispatch) {
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(newCampus => {
        dispatch(getCampus(newCampus));
        history.push(`/campuses/${newCampus.id}`);
      })
      .catch(err => console.error(err));
  };
}

export function updateCampus (id, campus, history) {
  return function thunk (dispatch) {
    return axios.put(`/api/campuses/${id}`, campus)
      .then(res => res.data)
      .then(editedCampus => {
        console.log("edited: ", editedCampus[1][0]);
        dispatch(getCampus(editedCampus[1][0]));
        history.push(`/campuses/${editedCampus[1][0].id}`);
      })
      .catch(err => console.error(`Updating campus: ${campus} unsuccesful`, err));
  }
}

export default function reducer (state = [], action) {
  console.log(action)
  switch (action.type) {

    case GET_CAMPUSES:
      console.log('setting state')
      return action.campuses;

    case GET_CAMPUS:
      return state.concat(action.campus);
    case DELETE_CAMPUS:
      return state.filter(campus => campus.id !== action.campusId);

    default:
      return state;
  }

}
