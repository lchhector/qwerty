import React from 'react';
import PropTypes from 'prop-types';
import PercentageBar from '../percentageBar';
import './percentMatch.scss';

const PercentMatch = ({ matchingData, noDescription }) => {
  const { softSkills, hardSkills, description } = matchingData;
  return (
    <div className="mh-percent-match">
      <PercentageBar percentage={softSkills} label="Soft Skills" />
      <div className="mh-percent-match__bars-spacing" />
      <PercentageBar percentage={hardSkills} label="Hard Skills" />
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
};

PercentMatch.defaultProps = {
  noDescription: false,
};

export default PercentMatch;
