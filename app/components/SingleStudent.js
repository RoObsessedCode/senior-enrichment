import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses, fetchSingleStudent } from '../reducers';

class SingleStudent extends Component {

  constructor () {
    super();
    this.getCampusName = this.getCampusName.bind(this);
  }
  componentDidMount() {
    const id = this.props.match.params.studentId;
    this.props.fetchSingleStudent(id);
    this.props.fetchCampuses();
  }

  getCampusName(allCampuses, studentCampusId) {

    const campus = allCampuses.find((campus) => {
      return campus.id === studentCampusId;
    });
    return campus ? campus.name : undefined;

  }

  render() {

    return (
      <div>
        <div>
          <h2>Student Name: </h2>
          <h3>{this.props.student && this.props.student.name}</h3>

          <h2>Student Email: </h2>
          <h3>{this.props.student.email}</h3>

          <h2>Campus: </h2>
          <h3>
            {
              this.getCampusName(this.props.campuses, this.props.student.campusId)
            }
          </h3>

        </div>
      </div>
    );

  }

}

const mapProps = (state) => {
  return {
    student: state.singleStudent,
    campuses: state.campuses
  };
};

const mapDispatch = { fetchSingleStudent, fetchCampuses };

export default connect(mapProps, mapDispatch)(SingleStudent);
