import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => {
  return (
    <Fragment>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add input</NavLink>
          </li>
          <li>
            <NavLink to="/view">View inputs</NavLink>
          </li>
        </ul>
      </header>
    </Fragment>
  );
};

Header.propTypes = {};

export default Header;
