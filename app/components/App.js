import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import Sidebar from './Sidebar';
import { connect } from 'react-redux'
import Navbar from './Navbar';
//import { fetchCampuses } from '../reducers/campuses.js';
import {fetchCampuses } from '../reducers/';
import Campuses from './Campuses';
import SingleCampus from './SingleCampus';


// exp

//all your main components

class App extends Component {

  componentDidMount() {
    this.props.fetchCampuses();
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/campuses" component={Campuses} />
            <Route path="/campuses/:campusId" component={SingleCampus} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapDispatch = { fetchCampuses };
export default connect(null, mapDispatch)(App);



// const mapState = () => ({ message: 'Log in' });

// const mapDispatch = { login: loginAndGoToUser };
// // // equivalent to:
// // const mapDispatch = (dispatch) => {
// //   return {
// //     login: function (credentials) {
// //       dispatch(loginAndGoToUser(credentials));
// //     }
// //   };
// // };

// export default connect(mapState, mapDispatch)(Login);




















// import React, { Component } from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';
// //import Sidebar from './Sidebar';
// import Navbar from './Navbar';
// //import MessagesList from './MessagesList';
// //import NewChannelEntry from './NewChannelEntry';
// //import store, { fetchMessages, fetchChannels } from '../store';

// export default class Main extends Component {

//   componentDidMount () {
//     const studentsThunk = fetchStudents();
//     const campusesThunk = fetchCampuses();
//     store.dispatch(studentsThunk);
//     store.dispatch(campusesThunk);
//   }

//   render () {
//     return (
//       <div>
//         <Navbar />
//         <main>
//           <Switch>

//           </Switch>
//         </main>
//       </div>
//     );
//   }



// }
