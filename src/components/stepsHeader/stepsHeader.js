import React from 'react';
import PropTypes from 'prop-types';
import './stepsHeader.scss';

const StepsHeader = ({ stepNum }) => (
  <>
    {(stepNum === '1')
    && (
      <header className="mh-steps-header">
        <div>
          <span className="mh-steps-header__big-circle">1</span>
          <span className="mh-steps-header__big-bold-words">Sign Up</span>
        </div>
        <span className="mh-steps-header__line" />
        <div className="mh-steps-header--margin-bottom mh-steps-header--margin-left">
          <span className="mh-steps-header__small-circle">2</span>
          <span className="mh-steps-header__normal-words">Fill up Basic info</span>
        </div>
      </header>
    )}

    {(stepNum === '2')
    && (
    <header className="mh-steps-header">
      <div className="mh-steps-header--margin-bottom">
        <span className="mh-steps-header__small-circle">1</span>
        <span className="mh-steps-header__normal-words">Sign Up</span>
      </div>
      <span className="mh-steps-header__line" />
      <div className="mh-steps-header--margin-bottom mh-steps-header--margin-left">
        <span className="mh-steps-header__big-circle">2</span>
        <span className="mh-steps-header__big-bold-words">Fill up Basic info</span>
      </div>
    </header>
    )}
  </>
);

StepsHeader.propTypes = {
  stepNum: PropTypes.string,
};

StepsHeader.defaultProps = {
  stepNum: '2',
};

export default StepsHeader;
