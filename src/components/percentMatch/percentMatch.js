import React from 'react';
import PropTypes from 'prop-types';
import PercentageBar from '../percentageBar';
import './percentMatch.scss';

const PercentMatch = ({ matchingData, noDescription, selected }) => {
  const { softSkills, hardSkills, description } = matchingData;
  return (
    <div className="mh-percent-match">
      <PercentageBar percentage={softSkills} label="Soft Skills" selected={selected} />
      <div className="mh-percent-match__bars-spacing" />
      <PercentageBar percentage={hardSkills} label="Hard Skills" selected={selected} />
      {!noDescription && (
        <div className="mh-percent-match__description">{description}</div>
      )}
    </div>
  );
};

PercentMatch.propTypes = {
  matchingData: PropTypes.shape({
    softSkills: PropTypes.string,
    hardSkills: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  noDescription: PropTypes.bool,
  selected: PropTypes.bool,
};

PercentMatch.defaultProps = {
  noDescription: false,
  selected: false,
};

export default PercentMatch;
