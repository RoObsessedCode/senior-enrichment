import React from 'react';
import {connect} from 'react-redux';
import {writeCampusName, writeCampusImage, postCampus} from '../reducers/';
//import { writeCampusName } from '../reducers/newCampusEntry';

function NewCampusEntry (props)  {
  //ATTENTION!!!! OWN PROPS -- checkout react-redux 3 6
  //create new campus, automatically navigate to campus using history 3 6


  //const newCampusEntry = props.newCampusEntry;
  //console.log("newCampusEntry", newCampusEntry);

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label>Create a Campus</label>
        <input
          value={props.campusName}
          onChange={props.handleChangeName}
          type="text"
          name = "campusName"
          placeholder="Please Enter A New Campus Name"
          multiple
          />
        <label>Campus Image Url</label>
        <input
          type="text"
          name="campusImage"
          value= {props.campusImage}
          onChange={props.hangleChange}
          placeholder="Please Enter a New Campus Image Url"

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
    handleChangeName: function(event) {
      //const name = event.target.name;
      const inputValue = event.target.value;
      //this.setState({campusName: inputValue })
      dispatch(writeCampusName(inputValue));

    },
    handleChangeImage: function(event) {
      //const name = event.target.name;
      const inputValue = event.target.value;
      //this.setState({campusImage: inputValue})
      dispatch(writeCampusImage(inputValue));
    },
    handleSubmit: function(event) {
      event.preventDefault();
      const name = event.target.campusName.value;
      const imageUrl = event.target.campusImage.value;

      const newCampus = { name, imageUrl };
      dispatch(postCampus(newCampus, ownProps.history));
      dispatch(writeCampusName(''));
      dispatch(writeCampusImage(''));

     //do you want to send an object or name
    }

  };
}

const NewCampusEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewCampusEntry);
export default NewCampusEntryContainer;
