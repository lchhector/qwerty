import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import { Link } from 'react-router-dom';
// import matchubLogo from '../../assets/matchub_blackwords_lowres.png';
import './login.scss';

const BlueCheckbox = withStyles({
  root: {
    color: '#7fabe055',
    '&$checked': {
      color: '#7fabe088',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const Login = () => (
  <div className="mh-login">
    <section className="mh-login__side-image">
      {/* <img src={matchubLogo} alt="MatcHub.co" className="mh-login__side-image__mh-logo" /> */}
    </section>

    <section className="mh-login__content">
      <header className="mh-login__content__header">Welcome Back!</header>
      <div className="mh-login__content__subHeader">Please login to your account</div>

      <form className="mh-login__content__form">
        <label htmlFor="email">Email</label><br />
        <input type="email" id="email" className="mh-login__content__form__input-text" /><br />
        <label htmlFor="pwd">Password</label><br />
        <input type="password" id="pwd" className="mh-login__content__form__input-text" /><br />

        <div className="mh-login__content__form__checkboxes">
          <FormControlLabel
            control={<BlueCheckbox name="rememberMe" />}
            label="Remember Me"
          />
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="mh-login__content__form__checkboxes__forgetPassword">Forget Password?</a>
        </div>
        <br />
        <button type="submit" className="mh-login__content__form__button">Candidate Login</button>
      </form>

      <div className="mh-login__content__footer">
        Don&apos;t have an account? {' '}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className="mh-login__content__form__checkboxes__forgetPassword">Sign Up Here</a>
        {/* <Link to="/signup">Sign Up Here</Link> */}
      </div>
    </section>
  </div>
);

export default Login;
