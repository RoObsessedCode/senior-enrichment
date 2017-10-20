import React, {Component} from 'react';
import { connect } from 'react-redux';
import { editStudentName, editStudentEmail, updateStudent } from '../reducers'

export class EditStudent extends Component {

  render() {

  return (
    <form onSubmit={this.props.handleSubmit}>
      <div>
        <label>Edit Student Name: </label>
        <input
          value={this.props.editStudentNameEntry}
          onChange={this.props.handleChangeName}
          type="text"
          name="studentName"
          placeholder="Enter A New Student Name"
          multiple
        />
        <label>Edit Student's Email: </label>
        <input
          value={this.props.editStudentEmailEntry}
          onChange={this.props.handleChangeEmail}
          type="text"
          name="studentEmail"
          placeholder="Enter New Student's Email Address"
        />
        <select name="studentsCampusName" >
          {
            this.props.campuses.map(campus => {
              return (
                <option key={campus.id} value={campus.id}>{campus.name}</option>
              );

            })
          }
        </select>

      </div>
      <div>
        <button type="submit" >Complete Student Changes</button>
      </div>
    </form>
  );
  }

}

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses,
    editStudentNameEntry: state.editStudentNameEntry,
    editStudentEmailEntry: state.editStudentEmailEntry

  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleChangeName: function (event) {
      const inputValue = event.target.value;
      dispatch(editStudentName(inputValue));
    },
    handleChangeEmail: function (event) {
      const inputValue = event.target.value;
      dispatch(editStudentEmail(inputValue));
    },
    handleSubmit: function (event) {
      event.preventDefault();

      const studentId = ownProps.match.params.studentId;
      const editedStudent = { studentId };
      const name = event.target.studentName.value;
      if (name) editedStudent.name = name;
      const email = event.target.studentEmail.value;
      if (email) editedStudent.email = email;
      const campusId = event.target.studentsCampusName.value;
      if (campusId) editedStudent.campusId = campusId;

      dispatch(updateStudent(studentId, editedStudent, ownProps.history));

    }
  };
};

const EditStudentContainer = connect(mapStateToProps, mapDispatchToProps)(EditStudent);
export default EditStudentContainer;
