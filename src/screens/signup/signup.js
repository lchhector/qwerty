import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import { Link } from 'react-router-dom';
// import matchubLogo from '../../assets/mh_logo_black_text.png';
import './signup.scss';

const BlueCheckbox = withStyles({
  root: {
    color: '#7fabe055',
    '&$checked': {
      color: '#7fabe088',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const candidate = <span>I am a <u>Candidate</u></span>;
const company = <span>Signing up as a <u>Company</u></span>;
const terms = <span> I accept the <u>Terms and Conditions</u></span>;

const Signup = () => (
  <div className="mh-signup">
    <section className="mh-signup__side-image">
      {/* <img src={matchubLogo} alt="MatcHub.co" className="mh-signup__side-image__mh-logo" /> */}
    </section>

    <section className="mh-signup__content">
      <header className="mh-signup__content__header">
        <div className="mh-signup__content__header__1st-step">
          <span className="mh-signup__content__header__1">1</span>
          <span className="mh-signup__content__header__1-text">Sign Up</span>
        </div>
        <span className="mh-signup__content__header__line" />
        <div className="mh-signup__content__header__2nd-step">
          <span className="mh-signup__content__header__2">2</span>
          <span className="mh-signup__content__header__2-text">Fill up Basic info</span>
        </div>
      </header>
      <form className="mh-signup__content__form">
        <label htmlFor="email">Email</label><br />
        <input type="email" id="email" className="mh-signup__content__form__input-text" /><br />
        <label htmlFor="pwd">Password</label><br />
        <input type="password" id="pwd" className="mh-signup__content__form__input-text" /><br />

        <div className="mh-signup__content__form__checkboxes">
          <FormControlLabel
            control={<BlueCheckbox name="candidate" />}
            label={candidate}
            className="mh-signup__content__form__checkboxes__candidate"
          />
          <FormControlLabel
            control={<BlueCheckbox name="company" />}
            label={company}
            className="mh-signup__content__form__checkboxes__company"
          />
          <FormControlLabel
            control={<BlueCheckbox name="terms" />}
            label={terms}
            className="mh-signup__content__form__checkboxes__terms"
          />
        </div>

        <br />
        <button type="submit" className="mh-signup__content__form__button">Create Candidate Account</button>
      </form>

      <div className="mh-signup__content__footer">
        Already have an account? {' '}
        <a href="signup.html">Login here</a>
        {/* <Link to="/login">Login here</Link> */}
      </div>
    </section>
  </div>
);

export default Signup;
