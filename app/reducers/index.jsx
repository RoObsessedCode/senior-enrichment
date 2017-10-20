import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

//import subReducers
import campuses from './campuses';
import singleCampus from './singleCampus';
import studentsList from './studentsList';
import singleStudent from './singleStudent';
import allStudents from './allStudents';
import newCampusNameEntry from './newCampusNameEntry';
import newCampusImageEntry from './newCampusImageEntry';
import newStudentNameEntry from './newStudentNameEntry';
import newStudentEmailEntry from './newStudentEmailEntry';
import editStudentNameEntry from './editStudentNameEntry';
import editStudentEmailEntry from './editStudentEmailEntry';
import editCampusNameEntry from './editCampusNameEntry';
import editCampusImageEntry from './editCampusImageEntry';

//const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

const rootReducer = combineReducers({
  campuses, singleCampus, studentsList, singleStudent, allStudents, newCampusNameEntry, newCampusImageEntry, newStudentNameEntry, newStudentEmailEntry, editStudentNameEntry, editStudentEmailEntry, editCampusImageEntry, editCampusNameEntry
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
export * from './newStudentNameEntry'
export * from './newStudentEmailEntry'
export * from './singleStudent'
export * from './editStudentNameEntry'
export * from './editStudentEmailEntry'
export * from './editCampusImageEntry'
export * from './editCampusNameEntry'
