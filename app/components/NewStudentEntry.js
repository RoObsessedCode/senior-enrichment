import React from 'react';
import { connect } from 'react-redux';
import { writeStudentName, writeStudentEmail, postStudent, fetchCampuses } from '../reducers/';

function NewStudentEntry(props) {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label>Add New Student: </label>
        <input
          value={props.newStudentNameEntry}
          onChange={props.handleChangeName}
          type="text"
          name="studentName"
          placeholder="Enter A New Student Name"
          multiple
        />
        <label>Student's Email: </label>
        <input
          value={props.newStudentEmailEntry}
          onChange={props.handleChangeEmail}
          type="text"
          name="studentEmail"
          placeholder="Enter New Student's Email Address"
        />
        <select name="studentsCampusName" >
          {
            props.campuses.map(campus => {
              return (
                <option key={campus.id} value={campus.id}>{campus.name}</option>
              );

            })
          }
        </select>

      </div>
      <div>
        <button type="submit" >Create Student</button>
      </div>
    </form>
  )
}

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses,
    newStudentNameEntry: state.newStudentNameEntry,
    newStudentEmailEntry: state.newStudentEmailEntry

  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleChangeName: function (event) {
      const inputValue = event.target.value;
      dispatch(writeStudentName(inputValue));
    },
    handleChangeEmail: function (event) {
      const inputValue = event.target.value;
      dispatch(writeStudentEmail(inputValue));
    },
    handleSubmit: function (event) {
      event.preventDefault();
      const name = event.target.studentName.value;
      const email = event.target.studentEmail.value;
      const campusId = event.target.studentsCampusName.value;

      const newStudent = { name, email, campusId };
      dispatch(postStudent(newStudent, ownProps.history));
      dispatch(writeStudentName(''));
      dispatch(writeStudentEmail(''));
    }
  };
};

const NewStudentEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewStudentEntry);
export default NewStudentEntryContainer;
