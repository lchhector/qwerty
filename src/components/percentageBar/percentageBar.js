import React from 'react';
import PropTypes from 'prop-types';
import './percentageBar.scss';

const PercentageBar = ({ percentage, label }) => (
  <div className="mh-percentage">
    <span className="mh-percentage__bar">
      <span className="mh-percentage__bar__fill" style={{ width: `${percentage}%` }}>
        {percentage} % Match
      </span>
    </span>
    <span className="mh-percentage__bar__label">{label}</span>
  </div>
);

PercentageBar.propTypes = {
  percentage: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default PercentageBar;
