import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

//import subReducers
import campuses from './campuses';
import singleCampus from './singleCampus';
import studentsList from './studentsList';
import allStudents from './allStudents';
import newCampusNameEntry from './newCampusNameEntry';
import newCampusImageEntry from './newCampusImageEntry';

//const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

const rootReducer = combineReducers({
  campuses, singleCampus, studentsList, allStudents, newCampusNameEntry, newCampusImageEntry
});

const store = createStore(
  rootReducer
);

export default rootReducer

//export action creaters
export * from './campuses'
export * from './singleCampus'
export * from './studentsList'
export * from './allStudents'
export * from './newCampusNameEntry'
export * from './newCampusImageEntry'
