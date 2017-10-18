import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAllStudents, fetchCampuses, deleteStudent } from '../reducers/';

class AllStudents extends Component {

  constructor () {
    super();
    this.getCampusName = this.getCampusName.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
  }
  componentDidMount() {
    this.props.fetchAllStudents();
    this.props.fetchCampuses();
  }

  getCampusName(allCampuses, studentCampusId) {

    const campus = allCampuses.find((campus) => {
      return campus.id === studentCampusId;
    });
    return campus ? campus.name : undefined;

  }

  deleteStudent (studentId) {
    return () => {
      this.props.deleteStudent(studentId);
    }

  }


  render() {
    const allStudents = this.props.allStudents;
    const allCampuses = this.props.allCampuses;
    return (
      <div>
        <table>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Campus</th>
            <th>Delete</th>
          </tr>
          {
            allStudents && allStudents.map(student => {
              return (
                <tr key={student.id}>
                  <th>{student.id}</th>
                  <th>
                    {student.name}
                  </th>
                  <th>
                    {this.getCampusName(allCampuses, student.campusId)}
                  </th>
                  <th>
                    <span>
                      <button onClick={this.deleteStudent(student.id)}type="button">X</button>
                    </span>
                  </th>
                </tr>
              );
            })

          }

        </table>

      </div>
    );

  }

}

const mapProps = (state) => {
  return {
    allCampuses: state.campuses,
    allStudents: state.allStudents
  };
};

const mapDispatch = { fetchAllStudents, fetchCampuses, deleteStudent };

export default connect(mapProps, mapDispatch)(AllStudents);
