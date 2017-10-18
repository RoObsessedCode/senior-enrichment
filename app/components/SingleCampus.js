//import React, { Component } from 'react';
import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchSingleCampus } from '../reducers/';

class SingleCampus extends Component {

  componentDidMount() {
    const id = this.props.match.params.campusId;
    this.props.fetchSingleCampus(id);
  }


  //console.log("campus--bro", props.fetchSingleCampus(id))
  // console.log("propsss", props);
  render() {
    return (
      <div>
        <div>
          <h3>{this.props.campus && this.props.campus.name}</h3>
          <img src={ this.props.campus.imageUrl }/>

        </div>
      </div>
    );
  }

}

const mapProps = (state) => {
  return {
    campus: state.singleCampus
  };
};
const mapDispatch = { fetchSingleCampus };
export default connect(mapProps, mapDispatch)(SingleCampus);
