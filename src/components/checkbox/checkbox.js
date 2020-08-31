import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.scss';

const Checkbox = ({ name, children }) => (
  <>
    <input type="checkbox" id={name} name={name} value={name} className="mh-checkbox" />
    <span className="mh-checkbox-custom" />
    <label htmlFor={name} className="mh-label">{children}</label>
  </>
);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Checkbox;
