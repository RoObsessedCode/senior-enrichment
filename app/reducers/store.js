// import axios from 'axios';
// import {createStore, applyMiddleware} from 'redux';
// import thunkMiddleware from 'redux-thunk';
// //import socket from '../socket';


// //INITIAL STATE
// const initialState = {
//   campuses:  [],
//   newCampusEntry: ''
// }

// //ACTION_TYPES

// //const GET_CAMPUS = 'GET_CAMPUS';
// const GET_CAMPUSES = 'GET_CAMPUSES';
// const WRITE_CAMPUS_NAME = 'WRITE_CAMPUS_NAME';

// //ACTION_CREATERS

// // export function getCampus (campus) {
// //   const action = { type: GET_CAMPUS, campus };
// //   return action;
// // }

// export function writeCampusName (campusName) {
//   return {
//     type: WRITE_CAMPUS_NAME,
//     newCampusEntry: campusName
//   };
// }

// export function getCampuses (campuses) {
//   const action = { type: GET_CAMPUSES, campuses };
//   return action;
// }

// // THUNK CREATORS
// export function fetchCampuses () {
//   return function thunk (dispatch) {
//     return axios.get('/api/campuses')
//       .then(res => res.data)
//       .then(campuses => {
//         const action = getCampuses(campuses);
//         dispatch(action);
//       });
//   };
// };

// export function postCampus (campus) {
//   return function thunk(dispatch) {
//     return axios.post('api/campuses', campus)
//       .then(res => res.data)
//       .then(newCampus => {
//         dispatch(getCampuses(newCampus))
//         //socket.emit('new-campus', newCampus);
//         //check out react-redux 3 5 review video for sockets
//       });
//   };
// };
// export default function reducer (state = initialState, action) {

//   switch (action.type) {

//     case GET_CAMPUSES:
//       return {
//         Object.assign({}, state, {campuses: action.campuses})
//       }


//     case WRITE_CAMPUS_NAME:
//       return {
//         Object.assign({}, state, {newCampusEntry: action.newCampusEntry})
//       }



//     // case GET_CHANNEL:
//     //   return [...state, action.channel];


//     }
// }





