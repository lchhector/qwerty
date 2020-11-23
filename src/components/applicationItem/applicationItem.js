import React from 'react';
import PropTypes from 'prop-types';
import Trait from '../trait';
import PercentMatch from '../percentMatch';
import './applicationItem.scss';

const ApplicationItem = ({
  application,
  value,
  currentValue,
  onPress,
}) => {
  let selected = false;
  if (currentValue === value) {
    selected = true;
  } else selected = false;
  const {
    name, applicationFor,
    year, degree, related, top3Traits,
  } = application;
  return (
    <button
      type="button"
      className={(selected) ? 'mh-application-item mh-application-item--active' : 'mh-application-item'}
      onClick={() => onPress(value)}
    >
      {/* header will be changed to a link/button to another screen */}
      <header>Application for {applicationFor}</header>
      <div className="mh-application-item__applicant-info">
        <span className={(selected) ? 'name selected--active' : 'name'}>{name}</span>
        <span className="line" />
        <span>{year && (
          <span>Year {year},</span>
        )} {degree}
        </span>
        <div className={(selected) ? 'selected--active' : {}}>{related}</div>
      </div>
      <div className="mh-application-item__traits">
        {top3Traits.map((traitObject) => (
          <span className="mh-application-item__traits--inline-block">
            <Trait trait={traitObject.trait} />
          </span>
        ))}
      </div>
      <div className="mh-application-item__percent-match">
        <PercentMatch matchingData={application.matchingData} noDescription selected={selected} />
      </div>
    </button>
  );
};

ApplicationItem.propTypes = {
  application: PropTypes.shape({
    name: PropTypes.string,
    applicationFor: PropTypes.string,
    year: PropTypes.string,
    degree: PropTypes.string,
    top3Traits: PropTypes.arrayOf({
      trait: PropTypes.string,
      description: PropTypes.string,
    }),
    related: PropTypes.string,
    matchingData: PropTypes.shape({}),
  }).isRequired,
  value: PropTypes.string.isRequired,
  currentValue: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ApplicationItem;
