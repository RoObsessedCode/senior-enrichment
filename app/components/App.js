import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import Sidebar from './Sidebar';
import { connect } from 'react-redux'
import Navbar from './Navbar';
//import { fetchCampuses } from '../reducers/campuses.js';
import {fetchCampuses } from '../reducers/';
import Campuses from './Campuses';
import SingleCampus from './SingleCampus';
import AllStudents from './AllStudents';
import NewCampusEntry from './NewCampusEntry';
import NewStudentEntry from './NewStudentEntry';
import SingleStudent from './SingleStudent';
import EditStudent from './EditStudent';
import EditCampus from './EditCampus';

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
            <Route path="/new-campus" component={NewCampusEntry} />
            <Route path="/edit-campus/:campusId" component={EditCampus} />
            <Route path="/new-student" component={NewStudentEntry} />
            <Route path="/edit-student/:studentId" component={EditStudent} />
            <Route exact path="/campuses" component={Campuses} />
            <Route path="/campuses/:campusId" component={SingleCampus} />
            <Route exact path="/students" component={AllStudents} />
            <Route path="/students/:studentId" component={SingleStudent} />
            <Route path="/" component = {Campuses} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapDispatch = { fetchCampuses };
export default connect(null, mapDispatch)(App);
