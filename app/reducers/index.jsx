import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

//import subReducers
import campuses from './campuses';

//const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

const rootReducer = combineReducers({
  campuses
});

const store = createStore(
  rootReducer
);

export default rootReducer

//export action creaters
export * from './campuses'
