import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ children, onPress, style }) => (
  <button
    type="button"
    className="mh-button"
    style={(style) || {}}
    onClick={() => onPress()}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

Button.defaultProps = {
  children: 'Click me',
  onPress: () => {
    alert('Hello!');
  },
  style: null,
};

export default Button;
