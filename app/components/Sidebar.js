import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {

  return (
    <sidebar>
      <section>
        <h4>
          <button type="button">Home</button>
        </h4>
      </section>
      <section>
        <h4>
          <button type="button">Students</button>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
