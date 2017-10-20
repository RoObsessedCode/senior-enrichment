import React, {Component} from 'react';
import { connect } from 'react-redux';
import { editCampusName, editCampusImage, updateCampus } from '../reducers'

export function EditCampus(props) {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label>Edit Campus: </label>
        <input
          value={props.newCampusNameEntry}
          onChange={props.handleChangeName}
          type="text"
          name="campusName"
          placeholder="Enter A New Campus Name"
          multiple
        />
        <label>Edit Campus Image Url: </label>
        <input

          value={props.newCampusImageEntry}
          onChange={props.hangleChangeImage}
          type="text"
          name="campusImage"
          placeholder="Enter a New Campus Image Url"

        />
      </div>
      <div>
        <button type="submit" >Create Edited Campus</button>
      </div>
    </form>
  )

}

const mapStateToProps = function (state) {
  return {
    students: state.allStudents,
    editCampusNameEntry: state.editCampusNameEntry,
    editCampusImageEntry: state.editCampusImageEntry

  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleChangeName: function (event) {
      const inputValue = event.target.value;
      dispatch(editCampusName(inputValue));
    },
    handleChangeImage: function (event) {
      const inputValue = event.target.value;
      dispatch(editCampusImage(inputValue));
    },
    handleSubmit: function (event) {
      event.preventDefault();

      const campusId = ownProps.match.params.campusId;
      const editedCampus = { campusId };
      const name = event.target.campusName.value;
      if (name) editedCampus.name = name;
      const imageUrl = event.target.campusImage.value;
      if (imageUrl) editedCampus.imageUrl = imageUrl;

      dispatch(updateCampus(campusId, editedCampus, ownProps.history));

    }
  };
};

const EditCampusContainer = connect(mapStateToProps, mapDispatchToProps)(EditCampus);
export default EditCampusContainer;
