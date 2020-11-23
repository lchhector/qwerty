/* eslint-disable no-alert */
import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import StepsHeader from '../../components/stepsHeader';
import matchubLogo from '../../assets/mh_logo_black_text.png';
import bigPictureCandidate from '../../assets/big_picture_2.png';
import bigPictureCompany from '../../assets/big_picture_3.png';
import './signup.scss';
import Button from '../../components/button';

const useStyles = makeStyles({
  root: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins, San Serif',
    whiteSpace: 'nowrap',
  },
  customPadding: {
    padding: 2,
    marginLeft: 7,
  },
  others: {
    border: '1px soild black',
    padding: '6px 0 1px 0',
  },
});

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '6px 26px 6px 12px',
    minWidth: 200,
    width: '100%',
    // transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

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

const Signup = () => {
  const history = useHistory();
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCompany, setIsCompany] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleCreateAccount = () => {
    if (email === '') {
      alert('Please enter an email!');
      return;
    }
    if (password === '') {
      alert('Please enter a password!');
      return;
    }
    if (!acceptTerms) {
      alert('Please accept the terms and conditions!');
      return;
    }

    history.push('/basic-info', {
      email,
      password,
      isCompany,
    });
  };

  const handleChange = (event) => {
    if (event.target.name === 'email') setEmail(event.target.value);
    if (event.target.name === 'password') setPassword(event.target.value);
  };

  return (
    <div className="mh-signup">
      <section className="mh-signup__side-image">
        <img src={matchubLogo} alt="MatcHub.co" className="mh-signup__side-image__mh-logo" />
        <img src={(isCompany ? bigPictureCompany : bigPictureCandidate)} alt=" " className="mh-signup__side-image__big-picture-signup" />
      </section>

      <section className="mh-signup__content">
        <StepsHeader stepNum="1" />
        <form className="mh-signup__content__form">
          <div className="mh-signup__content__form__textboxes">
            <FormControl className="mh-mt-20">
              <InputLabel shrink id="email" classes={{ root: classes.root }}>
                Email
              </InputLabel>
              <BootstrapInput type="email" name="email" value={email} onChange={handleChange} />
            </FormControl>
            <div style={{ height: '25px' }} />
            <FormControl>
              <InputLabel shrink id="password" classes={{ root: classes.root }}>
                Password
              </InputLabel>
              <BootstrapInput type="password" name="password" value={password} onChange={handleChange} />
            </FormControl>
          </div>

          <div className="mh-signup__content__form__checkboxes">
            <FormControlLabel
              control={<BlueCheckbox name="candidate" />}
              label={candidate}
              className="mh-signup__content__form__checkboxes__candidate"
              checked={!isCompany}
              onChange={(event) => {
                setIsCompany(!event.target.checked);
              }}
            />
            <FormControlLabel
              control={<BlueCheckbox name="company" />}
              label={company}
              className="mh-signup__content__form__checkboxes__company"
              checked={isCompany}
              onChange={(event) => {
                setIsCompany(event.target.checked);
              }}
            />
            <FormControlLabel
              control={<BlueCheckbox name="terms" />}
              label={terms}
              className="mh-signup__content__form__checkboxes__terms"
              checked={acceptTerms}
              onChange={(event) => {
                setAcceptTerms(event.target.checked);
              }}
            />
          </div>

          <div style={{ height: '32px' }} />

          <Button onPress={handleCreateAccount} style={(isCompany) ? { backgroundColor: '#1F2F42' } : {}}>
            <div>
              {(isCompany) ? 'Create Company Account' : 'Create Candidate Account'}
            </div>
          </Button>

        </form>

        <div className="mh-signup__content__footer">
          Already have an account? {' '}
          <Link to="/login">Login here</Link>
        </div>

        <div>Environment: {process.env.NODE_ENV} </div>
        {/* <div>Environment: {process.env.PUBLIC_URL} </div>
        <div>Environment: {process.env.dirname} </div>
        <div>Environment: {process.env.file_fragment_glsl} </div> */}
      </section>
    </div>
  );
};

export default Signup;
