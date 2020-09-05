import React from 'react';
import PropTypes from 'prop-types';
import './percentageBar.scss';

const PercentageBar = ({ percentage, label, selected }) => {
  if (percentage <= 35) {
    return (
      <div className="mh-percentage">
        <span className={(selected) ? 'mh-percentage__bar mh-percentage__bar--active' : 'mh-percentage__bar'}>
          <span
            className="mh-percentage__bar__fill"
            style={{ width: `${percentage}%` }}
          />
          <span className="mh-percentage__bar__text-outside-bar"> {percentage} % Match</span>
        </span>
        <span className="mh-percentage__bar__label">{label}</span>
      </div>
    );
  }
  return (
    <div className="mh-percentage">
      <span className={(selected) ? 'mh-percentage__bar mh-percentage__bar--active' : 'mh-percentage__bar'}>
        <span
          className={(selected) ? 'mh-percentage__bar__fill mh-percentage__bar__fill--active' : 'mh-percentage__bar__fill'}
          style={{ width: `${percentage}%` }}
        >
          {percentage} % Match
        </span>
      </span>
      <span className="mh-percentage__bar__label">{label}</span>
    </div>
  );
};

PercentageBar.propTypes = {
  percentage: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};

PercentageBar.defaultProps = {
  selected: false,
};

export default PercentageBar;
