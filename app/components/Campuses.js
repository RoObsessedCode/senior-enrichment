import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import store from '../store.jsx';
import { connect } from 'react-redux';

import { deleteCampus } from '../reducers/';

class Campuses extends Component {

  constructor() {
    super();
    this.deleteCampus = this.deleteCampus.bind(this);
  }

  deleteCampus(campusId) {
    return () => {
      this.props.deleteCampus(campusId);
    }

  }

  render() {
    const { campuses } = this.props;
    return (
      //use logic from albums here
      <div>
        <h2>Campuses</h2>
        <div>
          {
            campuses.map(campus => (
              <div key={campus.id}>
                <Link to={`/campuses/${campus.id}`}>

                  <div>
                    <h5>
                      <span>{campus.name}</span>
                    </h5>
                    <span>
                    <img src={campus.imageUrl} />
                    </span>
                  </div>
                </Link>
                <div>
                  <button onClick={this.deleteCampus(campus.id)} type="button">X</button>
                </div>
              </div>

            ))
          }
        </div>

      </div>
    )
  }
}
const mapStateToProps = function (state) {
  return {
    campuses: state.campuses
  };
}
const mapDispatch = { deleteCampus };

export default connect(mapStateToProps, mapDispatch)(Campuses);
