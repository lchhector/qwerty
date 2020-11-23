/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link, useHistory } from 'react-router-dom';
import { Textbox } from '../../components/formFields';
import { loginUser, storeToken } from '../../actions';
import Button from '../../components/button';
import matchubLogo from '../../assets/matchub_blackwords_lowres.png';
import bigPicture from '../../assets/big_picture_1.png';
import './login.scss';

const server = 'dgtocn1.ga';

const BlueCheckbox = withStyles({
  root: {
    color: '#7fabe055',
    '&$checked': {
      color: '#7fabe088',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  const userLogin = () => {
    // axios.post('http://localhost:8000/auth/api-token/', {
    axios.post(`${server}/auth/api-token/`, {
      username: email,
      password,
    }).then((res) => {
      const { token } = res.data;
      console.log(token, 'LOGIN SUCCESSFUL');
      dispatch(storeToken(token));
      axios.get(`${server}/v1/students/`, {
        headers: {
          Authorization: `Token ${token}`,
          // Authorization: 'Token ea7f7e846854e32579416362c11a78f85595d9bc',
        },
      }).then((res2) => {
        const userData = res2.data.find((user) => user.email === email);
        // const { id } = userData;
        dispatch(loginUser(userData));
        history.push('/overview');
      }).catch((err) => console.log(err));
    })
      .catch((err) => {
        // console.log(err, 'LOGIN ERROR');
        console.log(JSON.stringify(err), 'LOGIN EVENT');
        console.log(err.message, 'LOGIN ERROR');
        console.log(err.code, 'LOGIN ERROR');
        console.log(err.detail, 'LOGIN ERROR');
        // eslint-disable-next-line no-alert
        alert('Username or password incorrect');
      });
  };

  return (
    <div className="mh-login">
      <section className="mh-login__side-image">
        <img src={matchubLogo} alt="MatcHub.co" className="mh-login__side-image__mh-logo" />
        <img src={bigPicture} alt=" " className="mh-login__side-image__big-picture-login" />
      </section>

      <section className="mh-login__content">
        <header className="mh-login__content__header">Welcome Back!</header>
        <div className="mh-login__content__subHeader">Please login to your account</div>

        <form className="mh-login__content__form">
          <div className="mh-login__content__form__textboxes">
            <Textbox label="Email" currentValue={email} setValue={setEmail} />
            <Textbox label="Password" currentValue={password} setValue={setPassword} />
          </div>

          <div className="mh-login__content__form__checkboxes">
            <FormControlLabel
              control={<BlueCheckbox name="rememberMe" />}
              label="Remember Me"
            />
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="mh-login__content__form__checkboxes__forgetPassword">Forget Password?</a>
          </div>
          <br />
          <Button onPress={() => userLogin()}>
            <div>Candidate Login</div>
          </Button>
        </form>

        <div className="mh-login__content__footer">
          Don&apos;t have an account? {' '}
          <Link to="/signup">Sign Up Here</Link>
        </div>
      </section>
    </div>
  );
};

export default Login;
