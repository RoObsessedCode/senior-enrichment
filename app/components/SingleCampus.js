//import React, { Component } from 'react';
import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchSingleCampus, fetchStudentsList } from '../reducers/';
import StudentsList from './StudentsList';

class SingleCampus extends Component {

  componentDidMount() {
    const id = this.props.match.params.campusId;
    this.props.fetchSingleCampus(id);
    this.props.fetchStudentsList(id);
  }


  //console.log("campus--bro", props.fetchSingleCampus(id))
  // console.log("propsss", props);
  render() {
    console.log("students from SingleCampus: ", this.props.students);
    //console.log("But do we have campus?: ", this.props.campus.name);
    //console.log("What is in my props? ", this.props);
    return (
      <div>
        <div>
          <h3>{this.props.campus && this.props.campus.name}</h3>
          <img src={ this.props.campus.imageUrl }/>

          <h3>Students</h3>
          <StudentsList students={this.props.students}/>


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
