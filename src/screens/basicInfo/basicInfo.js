/* eslint-disable no-alert */
/* eslint-disable no-console */
import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import StepsHeader from '../../components/stepsHeader';
import { Textbox } from '../../components/formFields';
import Button from '../../components/button';
import { updateUser, storeToken, loginUser } from '../../actions';
import matchubLogo from '../../assets/mh_logo_black_text.png';
import bigPictureCandidate from '../../assets/big_picture_2.png';
import './basicInfo.scss';

// const testUser = {
//   email: 'hellofrontend2@email.com',
//   password: 'superstrongpassword',
//   first_name: 'from',
//   last_name: 'frontend',
//   phone_number: '+6583006488',
//   referred_channel: 'I heard about MatcHub through the super-extra-long Facebook channel',
// }; // ** telephone number must have extension: +65

const server = 'dgtocn1.ga';

const BasicInfo = ({ location }) => {
  const history = useHistory();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const {
    firstName, lastName, phoneNumber, referredChannel, username, telegram, nationality,
  } = user;

  const { state } = location;
  const { email, password, isCompany } = state;

  const checkEmptyField = () => {
    if (!firstName.length > 0) {
      alert('First name is empty!');
      return false;
    }
    if (!lastName.length > 0) {
      alert('Last name is empty!');
      return false;
    }
    if (!phoneNumber.length > 0) {
      alert('Phone number is empty!');
      return false;
    }
    if (!referredChannel.length > 0) {
      alert('Where did you learn about us is empty!');
      return false;
    }
    return true;
  };

  const createAccount = () => {
    // history.push('/who-are-you');
    // return;
    const validFields = checkEmptyField();
    if (!validFields) return;

    const newUser = {
      email,
      password,
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      referred_channel: referredChannel,
    };

    axios.post(`${server}/v1/students/sign-up/`, newUser)
      .then((res) => {
        console.log(res.data, 'SIGNUP SUCCESS');
        dispatch(loginUser(res.data));
        // const { id } = res.data;
        axios.post(`${server}/auth/api-token/`, {
          username: email,
          password,
        }).then((res2) => {
          console.log(res2.data);
          dispatch(storeToken(res2.data));
          if (isCompany) history.push('/overview');
          else history.push('/who-are-you');
        })
          .catch((err) => console.log(err.data));
      })
      .catch((err) => {
        console.log(err, 'SIGNUP ERROR');
        // eslint-disable-next-line no-alert
        alert(`${err}\nPlease try again`);
      });
  };

  return (
    <div className="mh-basic-info">
      <section className="mh-basic-info__side-image">
        <img src={matchubLogo} alt="MatcHub.co" className="mh-basic-info__side-image__mh-logo" />
        <img src={bigPictureCandidate} alt=" " className="mh-basic-info__side-image__big-picture" />
      </section>
      <section className="mh-basic-info__content">
        <StepsHeader />
        <form className="mh-basic-info__content__form">
          <div className="name-fields">
            <Textbox
              label="First Name*"
              field="firstName"
              currentValue={firstName}
              setValue={(field, value) => dispatch(updateUser(field, value))}
            />
            <Textbox
              label="Last Name*"
              field="lastName"
              currentValue={lastName}
              setValue={(field, value) => dispatch(updateUser(field, value))}
            />
          </div>

          <Textbox
            label="Username"
            field="username"
            currentValue={username}
            setValue={(field, value) => dispatch(updateUser(field, value))}
          />
          <Textbox
            label="Nationality"
            field="nationality"
            currentValue={nationality}
            setValue={(field, value) => dispatch(updateUser(field, value))}
          />
          <Textbox
            label="Phone Number*"
            field="phoneNumber"
            currentValue={phoneNumber}
            setValue={(field, value) => dispatch(updateUser(field, value))}
          />
          <Textbox
            label="Telegram Handle"
            field="telegram"
            currentValue={telegram}
            setValue={(field, value) => dispatch(updateUser(field, value))}
          />
          <Textbox
            label="Where did you learn about us?*"
            field="referredChannel"
            currentValue={referredChannel}
            setValue={(field, value) => dispatch(updateUser(field, value))}
          />
          <div className="mh-basic-info__content__form__button">
            <Button onPress={() => createAccount()}>
              <div>
                Create Candidate Account
              </div>
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};

BasicInfo.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      email: PropTypes.string,
      password: PropTypes.string,
      isCompany: PropTypes.bool,
    }),
  }).isRequired,
};

// <div>Basic info component</div>
// <div>Who are you component</div>
// <div>More about you component</div>
// <div>What do you want component</div>

export default BasicInfo;
