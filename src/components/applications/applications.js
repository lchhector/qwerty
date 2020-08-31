import React from 'react';
import PropTypes from 'prop-types';

const Applications = ({ children, value, onChange }) => (
  <div>
    {React.Children.map(children, (child) => (
      React.cloneElement(child, {
        onPress: onChange,
        currentValue: value,
      })
    ))}
  </div>
);

export default Applications;
