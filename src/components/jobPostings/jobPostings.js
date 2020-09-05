import React from 'react';
import PropTypes from 'prop-types';

const JobPostings = ({ children, value, onChange }) => (
  <div>
    {React.Children.map(children, (child) => (
      React.cloneElement(child, {
        onPress: onChange,
        currentValue: value,
      })
    ))}
  </div>
);

JobPostings.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

JobPostings.defaultProps = {
  children: null,
};

export default JobPostings;
