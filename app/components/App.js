import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import Sidebar from './Sidebar';
import { connect } from 'react-redux'
import Navbar from './Navbar';
import { fetchCampuses } from '../reducers/campuses.js';
import Campuses from './Campuses';


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
            <Route path="/campuses" component={Campuses} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapDispatch = { fetchCampuses }
export default connect(null, mapDispatch)(App);
























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
