
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

  return (
    <nav>
      <section>
        <div>
          <h4>
            <Link to='/campuses'>
              <button type="button">Home</button>
            </Link>
          </h4>
          <h4>
            <Link to='/new-campus'>
              <button type="button">Add Campus</button>
            </Link>
          </h4>
        </div>

      </section>
      <section>
        <div>
          <h4>
            <Link to='/students'>
              <button type="button">Students</button>
            </Link>
          </h4>
          <h4>
            <Link to='/new-student'>
              <button type="button">Add Student</button>
            </Link>
          </h4>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;

// import React from 'react';
// import { connect } from 'react-redux';

// function Navbar (props) {

// }
