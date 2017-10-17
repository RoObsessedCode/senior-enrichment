import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import store from '../store.jsx';
import { connect } from 'react-redux';


const Campuses = (props) => {

  const { campuses } = props;
  console.log("props: ", props);
  return (
    //use logic from albums here
    <div>
      <h2>Campuses</h2>
      <div>
        {
          campuses.map(campus => (
            <div key={campus.id}>
              <Link to={`/campuses/${campus.id}`}>
                <img src={campus.imageUrl} />
                <div>
                  <h5>
                    <span>{campus.name}</span>
                  </h5>
                </div>
              </Link>
            </div>

          ))
        }
      </div>

    </div>
  )
}
const mapStateToProps = function (state) {
  return {
    campuses: state.campuses
  };
}

export default connect(mapStateToProps, null)(Campuses);

/* container comp is connected to store, whenever state inside store changes
this component will know that it might need to rerender dumb component passing down slices of state from store to props. we choose which slices of state via mapSTatetoProps function. every time state inside store is updated this func will be invoked with new state then the object that mapState toprops returns comes part of props that dumb component receives.
*/






// import React from 'react';
// import { withRouter, NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';

// function AllCampuses (props) {

//   //const { messages, channels, changeChannel } = props;
//   const { students, campuses } = props;

//   return (
//     <ul>
//       {
//         campuses.map(campus => {
//           return (
//             <li key={campus.id}>
//               <NavLink to={`/campuses/${campus.id}`}>
//                 <span># {campus.name}</span>
//                 <span></span>
//               </NavLink>
//             </li>
//           );
//         })
//       }
//       <li>
//         <NavLink to="/new-campus">Create a campus...</NavLink>
//       </li>
//     </ul>
//   );
// }

// const mapStateToProps = function (state) {
//   return {

//   };
// };

// // We need to wrap the component in `withRouter` so that the NavLinks will be able to update
// // Because `connect` implements `shouldComponentUpdate`, it will block re-rendering unless it detects
// // a prop change. When we change the url, neither the messages nor the channels we send to the ChannelList
// // component change, so the component doesn't re-render. What `withRouter` does is it passes the Router's
// // props down to its inner component.
// //
// // It's equivalent to saying:
// //
// // const ConnectedChannelList = connect(mapStateToProps)(ChannelList);
// //
// // ...elsewhere, in a `render`:
// // <Route component={ConnectedChannelList} />
// //
// const AllCampusesContainer = withRouter(connect(mapStateToProps)(ChannelList));
// export default AllCampusesContainer;
