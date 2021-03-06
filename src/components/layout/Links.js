// Imports
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// Component
const Links = props => {
  // console.log('props in Links: ', props);

  return (
    <ul className="right">
      <li>
        <NavLink to="/about">
          <span className="bold-text-style glow-text-style">About</span>
        </NavLink>
      </li>

      <li>
        <a
          href="https://github.com/LuigiLegion/star-wars-name-generator"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="bold-text-style glow-text-style">GitHub Repo</span>
        </a>
      </li>

      <li>
        <a
          href="https://github.com/LuigiLegion/star-wars-name-generator/tree/master/src/data/sets"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="bold-text-style glow-text-style">Data Sets</span>
        </a>
      </li>

      <li>
        <a
          href="http://taluigi.netlify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="bold-text-style glow-text-style">Contact Info</span>
        </a>
      </li>
    </ul>
  );
};

export default Links;

// Prop Types
Links.propTypes = {
  props: PropTypes.object,
};
