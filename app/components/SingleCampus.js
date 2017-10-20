import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { fetchSingleCampus, fetchStudentsList } from '../reducers/';
import StudentsList from './StudentsList';

class SingleCampus extends Component {

  componentDidMount() {
    const id = this.props.match.params.campusId;
    this.props.fetchSingleCampus(id);
    this.props.fetchStudentsList(id);
  }

  render() {

    return (
      <div>
        <div>
          <h3>{this.props.campus && this.props.campus.name}</h3>
          <img src={this.props.campus.imageUrl} />

          <h3>Students</h3>
          <StudentsList students={this.props.students} />
          <Link to={`/edit-campus/${this.props.campus.id}`}>
            <button type="button">Edit Campus</button>
          </Link>

        </div>
      </div>
    );
  }

}

const mapProps = (state) => {
  return {
    campus: state.singleCampus,
    students: state.studentsList
  };
};
const mapDispatch = { fetchSingleCampus, fetchStudentsList };
export default connect(mapProps, mapDispatch)(SingleCampus);
