import React from 'react';
import PropTypes from 'prop-types';
import matchubLogo from '../../assets/mh_logo_black_text.png';
import bigPictureCandidate from '../../assets/big_picture_2.png';
import './signupTemplate.scss';

const SignupTemplate = ({ children }) => (
  <div className="mh-basic-info">
    <section className="mh-basic-info__side-image">
      <img src={matchubLogo} alt="MatcHub.co" className="mh-basic-info__side-image__mh-logo" />
      <img src={bigPictureCandidate} alt=" " className="mh-basic-info__side-image__big-picture" />
    </section>
    <section className="mh-basic-info__content">
      { children }
    </section>
  </div>
);

SignupTemplate.propTypes = {
  children: PropTypes.node,
};

SignupTemplate.defaultProps = {
  children: null,
};

export default SignupTemplate;
