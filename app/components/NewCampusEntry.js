import React, {Component} from 'react';
import {connect} from 'react-redux';
import {writeCampusName} from '../reducers/store.js';

function NewCampusEntry (props) {
  //ATTENTION!!!! OWN PROPS -- checkout react-redux 3 6
  //create new campus, automatically navigate to campus using history 3 6
  const newCampusEntry = props.newCampusEntry;

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <input onChange={props.handleChange} name = "campusName"/>
      </div>
    </form>
  )



}

const mapStateToProps = function (state) {
  return {};
}

const mapDispatchToProps = function (dispatch) {
  return {
    handleChange: function(event) {
      const inputValue = event.target.value;
      const action = writeCampusName(inputValue);
      dispatch(action);
    },
    handleSubmit: function(event) {
      event.preventDefault();
      const name = event.target.campusName.value;
      const newCampus = { name };
      dispatch(postCampus(newCampus));

    }

  };
}

const NewCampusEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewCampusEntry)
export default NewCampusEntryContainer;
