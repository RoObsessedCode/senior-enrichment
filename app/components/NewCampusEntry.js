import React from 'react';
import { connect } from 'react-redux';
import { writeCampusName, writeCampusImage, postCampus } from '../reducers/';

function NewCampusEntry(props) {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label>Create Campus: </label>
        <input
          value={props.newCampusNameEntry}
          onChange={props.handleChangeName}
          type="text"
          name="campusName"
          placeholder="Enter A New Campus Name"
          multiple
        />
        <label>Campus Image Url: </label>
        <input

          value={props.newCampusImageEntry}
          onChange={props.hangleChangeImage}
          type="text"
          name="campusImage"
          placeholder="Enter a New Campus Image Url"

        />
      </div>
      <div>
        <button type="submit" >Create Campus</button>
      </div>
    </form>
  )
}

const mapStateToProps = function (state) {
  return {
    newCampusNameEntry: state.newCampusNameEntry,
    newCampusImageEntry: state.newCampusImageEntry
  };

}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    //REMEMEBR TO CONSOLE>LOG TARGET
    handleChangeName: function (event) {
      const inputValue = event.target.value;
      dispatch(writeCampusName(inputValue));

    },
    handleChangeImage: function (event) {
      const inputValue = event.target.value;
      dispatch(writeCampusImage(inputValue));
    },
    handleSubmit: function (event) {
      event.preventDefault();
      const name = event.target.campusName.value;
      const imageUrl = event.target.campusImage.value;

      const newCampus = { name, imageUrl };
      dispatch(postCampus(newCampus, ownProps.history));
      dispatch(writeCampusName(''));
      dispatch(writeCampusImage(''));

    }

  };
};

const NewCampusEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewCampusEntry);
export default NewCampusEntryContainer;
