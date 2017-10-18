
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

  return (
    <nav>
      <section>
        <h4>
          <Link to='/campuses'>
            <button type="button">Home</button>
          </Link>
        </h4>
      </section>
      <section>
        <h4>
          <Link to='/students'>
            <button type="button">Students</button>
          </Link>
        </h4>
      </section>
    </nav>
  );
}

export default Navbar;










// import React from 'react';
// import { connect } from 'react-redux';

// function Navbar (props) {

// }
