import React from 'react';
import PropTypes from 'prop-types';
import Trait from '../trait';
import './latestApplication.scss';

const LatestApplication = ({ application }) => {
  const {
    name,
    applicationFor,
    info,
  } = application;
  return (
    <div className="mh-application">
      {/* header will be changed to a link/button to another screen */}
      <header>Application for {applicationFor}</header>
      <div className="mh-application__applicant-info">
        <span className="name">{name}</span>
        <span className="line" />
        <span>{info.year && (
          <span>Year {info.year},</span>
        )} {info.degree}
        </span>
        <div>Related: {info.related}</div>
      </div>
      <div className="mh-application__traits">
        {info.top3.map((trait, index) => {
          if (index === 2) {
            return (
              <span className="mh-application__traits--inline-block">
                <Trait trait={trait} last />
              </span>
            );
          }
          return (
            <span className="mh-application__traits--inline-block">
              <Trait trait={trait} />
            </span>
          );
        })}
      </div>
    </div>
  );
};

LatestApplication.propTypes = {
  application: PropTypes.shape({
    name: PropTypes.string,
    applicationFor: PropTypes.string,
    info: PropTypes.shape({
      year: PropTypes.string,
      degree: PropTypes.string,
      top3: PropTypes.arrayOf({}),
      related: PropTypes.string,
    }),
    matchingData: PropTypes.shape({}),
  }).isRequired,
};

export default LatestApplication;
