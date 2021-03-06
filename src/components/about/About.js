// Imports
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// Component
const About = props => {
  // console.log('props in About: ', props);

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m12">
          <div className="section">
            <div className="card z-depth-0">
              <div className="card-content grey-text text-darken-3">
                <span className="card-title">
                  <span className="bold-text-style">About</span>
                </span>

                <ul className="about">
                  <li>
                    <div>
                      Ever wondered what your name would be had you lived in the
                      Star Wars universe?
                    </div>

                    <div>
                      I know I have, which is why I set out to build this app!
                    </div>

                    <br />

                    <div>
                      With a little over 22,000 first names and 10,000 last
                      names from both Canon and Legends and a set of matching
                      algorithms, you're bound to find your very own Star Wars
                      name based on your name in real life, or based on any
                      other name - it's completely up to you.
                    </div>

                    <br />

                    <div>I hope you like it, enjoy!</div>
                  </li>
                </ul>

                <br />

                <ul>
                  <li>
                    <NavLink to="/">
                      <span className="bold-text-style">
                        ← Back To Main Page
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// Prop Types
About.propTypes = {
  props: PropTypes.object,
};
