import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useHistory } from 'react-router-dom';
import {
  FormGroup, FormControl, FormControlLabel, Input, InputLabel, InputBase,
} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from '../../components/button';
import SignupTemplate from '../../components/signupTemplate';
import './whatDoYouWant.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Poppins, San Serif',
    lineHeight: '20px',
    maxWidth: '500px',
    position: 'relative',
    transform: 'scale(1)',
    // border: '1px solid black',
    // whiteSpace: 'nowrap',
  },
  customPadding: {
    padding: 2,
    marginLeft: 7,
  },
  largerMargin: {
    padding: 2,
    marginLeft: 7,
    marginRight: 10,
  },
  translateLabel: {
    alignItems: 'flex-start',
    color: '#878787',
  },
  grayText: {
    color: '#878787',
  },
  others: {
    padding: '6px 0 1px 0',
  },
  paper: {
    position: 'absolute',
    width: 460,
    backgroundColor: theme.palette.background.paper,
    border: '4px solid #7fabe033',
    borderRadius: '16px',
    outline: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5, 16, 4),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    color: '#878787',
    fontSize: 14,
  },
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(1),
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

const WhatDoYouWant = () => {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [hopeToGain, setHopeToGain] = useState({
    roleSpecificSkill: true,
    industrySpecificSkill: false,
    leadershipSkills: false,
    exploreInterests: false,
    sharpenResume: false,
    otherGains: false,
    otherGainsText: '',
  });
  const [values, setValues] = useState({
    mentoringRelationship: true,
    jobScopeAndDailyTasks: false,
    location: false,
    sizeOfCompany: false,
    companyCulture: false,
    allowance: false,
  });
  const [whatElseMatters, setWhatElseMatters] = useState('');
  const [resumeAudit, setResumeAudit] = useState({
    yes: false,
    no: false,
  });
  const [infoSharingConsent, setInfoSharingConsent] = useState(false);

  const {
    roleSpecificSkill, industrySpecificSkill, leadershipSkills,
    exploreInterests, sharpenResume, otherGains, otherGainsText,
  } = hopeToGain;
  const {
    mentoringRelationship, jobScopeAndDailyTasks, location,
    sizeOfCompany, companyCulture, allowance,
  } = values;
  const { yes, no } = resumeAudit;

  const handleCheckboxChangeHopeToGain = (event) => {
    if (event.target.name === 'otherGainsText') {
      setHopeToGain({
        ...hopeToGain, [event.target.name]: event.target.value,
      });
    } else {
      setHopeToGain({
        ...hopeToGain, [event.target.name]: event.target.checked,
      });
    }
  };
  const handleCheckboxChangeValues = (event) => {
    setValues({
      ...values, [event.target.name]: event.target.checked,
    });
  };
  const handleChangeWhatElseMatters = (event) => {
    setWhatElseMatters(event.target.value);
  };
  const handleCheckboxChangeResumeAudit = (event) => {
    if (event.target.name === 'yes') {
      setResumeAudit({
        yes: event.target.checked,
        no: !event.target.checked,
      });
    } else if (event.target.name === 'no') {
      setResumeAudit({
        yes: !event.target.checked,
        no: event.target.checked,
      });
    }
  };
  const handleCheckboxInfoSharingConsent = () => {
    setInfoSharingConsent(!infoSharingConsent);
  };

  const handleOpen = () => {
    setOpen(true);
    const details = {
      hopeToGain,
      values,
      whatElseMatters,
      resumeAudit,
      infoSharingConsent,
    };
    // eslint-disable-next-line no-console
    console.log(details, 'WHATDOYOUWANT OBJECT');
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handlePrevious = () => {
    history.goBack();
  };
  const handleSubmit = () => {
    history.push('/overview');
  };

  const customCheckBoxHopeToGain = (name, boolValue) => (
    <Checkbox
      checked={boolValue}
      className={classes.customPadding}
      icon={<CheckBoxOutlineBlankIcon style={{ fontSize: '28px', color: '#7FABE044' }} />}
      checkedIcon={<CheckBoxIcon style={{ fontSize: '28px' }} />}
      onChange={handleCheckboxChangeHopeToGain}
      name={name}
    />
  );
  const customCheckBoxValues = (name, boolValue) => (
    <Checkbox
      checked={boolValue}
      className={classes.customPadding}
      icon={<CheckBoxOutlineBlankIcon style={{ fontSize: '28px', color: '#7FABE044' }} />}
      checkedIcon={<CheckBoxIcon style={{ fontSize: '28px' }} />}
      onChange={handleCheckboxChangeValues}
      name={name}
    />
  );
  const customCheckBoxResumeAudit = (name, boolValue) => (
    <Checkbox
      checked={boolValue}
      className={classes.largerMargin}
      icon={<CheckBoxOutlineBlankIcon style={{ fontSize: '28px', color: '#7FABE044' }} />}
      checkedIcon={<CheckBoxIcon style={{ fontSize: '28px' }} />}
      onChange={handleCheckboxChangeResumeAudit}
      name={name}
    />
  );
  const customCheckBoxinfoSharingConsent = (name, boolValue) => (
    <Checkbox
      checked={boolValue}
      className={classes.largerMargin}
      icon={<CheckBoxOutlineBlankIcon style={{ fontSize: '28px', color: '#7FABE044' }} />}
      checkedIcon={<CheckBoxIcon style={{ fontSize: '28px' }} />}
      onChange={handleCheckboxInfoSharingConsent}
      name={name}
    />
  );

  const renderForm = () => (
    <>
      <FormGroup className="mh-mt-20">
        <InputLabel shrink id="job-type-label" classes={{ root: classes.root }}>
          What do you hope to gain out of your upcoming internship
        </InputLabel>
        <FormControlLabel
          control={customCheckBoxHopeToGain('roleSpecificSkill', roleSpecificSkill)}
          label="Learn role-specific skillsets"
        />
        <FormControlLabel
          control={customCheckBoxHopeToGain('industrySpecificSkill', industrySpecificSkill)}
          label="Learn industry-specific skillsets"
        />
        <FormControlLabel
          control={customCheckBoxHopeToGain('leadershipSkills', leadershipSkills)}
          label="Leadership skills"
        />
        <FormControlLabel
          control={customCheckBoxHopeToGain('exploreInterests', exploreInterests)}
          label="Explore Interests"
        />
        <FormControlLabel
          control={customCheckBoxHopeToGain('sharpenResume', sharpenResume)}
          label="Sharpen my resume"
        />
        <div>
          <FormControlLabel
            control={customCheckBoxHopeToGain('otherGains', otherGains)}
            label="Others, "
          />
          <FormControl className="mh-whoareyou-others">
            <Input
              name="otherGainsText"
              classes={{ input: classes.others }}
              value={otherGainsText}
              onChange={handleCheckboxChangeHopeToGain}
            />
          </FormControl>
        </div>
      </FormGroup>

      <FormGroup className="mh-mt-20">
        <InputLabel shrink id="job-type-label" classes={{ root: classes.root }}>
          What do you value in your internship
        </InputLabel>
        <FormControlLabel
          control={customCheckBoxValues('mentoringRelationship', mentoringRelationship)}
          label="Mentoring Relationship"
        />
        <FormControlLabel
          control={customCheckBoxValues('jobScopeAndDailyTasks', jobScopeAndDailyTasks)}
          label="Job Scope and Daily Tasks"
        />
        <FormControlLabel
          control={customCheckBoxValues('location', location)}
          label="Location"
        />
        <FormControlLabel
          control={customCheckBoxValues('sizeOfCompany', sizeOfCompany)}
          label="Size of Company"
        />
        <FormControlLabel
          control={customCheckBoxValues('companyCulture', companyCulture)}
          label="Company Culture"
        />
        <FormControlLabel
          control={customCheckBoxValues('allowance', allowance)}
          label="Monthly Salary/Allowance"
        />
      </FormGroup>

      <FormControl className="mh-mt-20">
        <InputLabel shrink id="faculty-and-major-label" classes={{ root: classes.root }}>
          What else matters to you when you are looking for an internship
        </InputLabel>
        <BootstrapInput onChange={handleChangeWhatElseMatters} value={whatElseMatters} name="what else matters" />
      </FormControl>

      <FormGroup className="mh-mt-20">
        <InputLabel shrink id="job-type-label" classes={{ root: classes.root }}>
          Are you willing to pay $5 to have your resume audited and advised by us?
        </InputLabel>
        <div className="mh-whatdoyouwant-resume-audit">
          <FormControlLabel
            control={customCheckBoxResumeAudit('yes', yes)}
            label="Yes"
            classes={{
              root: classes.grayText,
            }}
          />
          <div style={{ width: '30px' }} />
          <FormControlLabel
            control={customCheckBoxResumeAudit('no', no)}
            label="No"
            classes={{
              root: classes.grayText,
            }}
          />
        </div>
      </FormGroup>

      <FormGroup className="mh-mt-20">
        <FormControlLabel
          control={customCheckBoxinfoSharingConsent('infoSharingConsent', infoSharingConsent)}
          label="Do you agree to share the above answers for profiling, research and job matching purposes - including sharing to potential employers?"
          classes={{
            root: classes.translateLabel,
          }}
        />
      </FormGroup>
    </>
  );

  const renderButtons = () => (
    <div className="mh-moreaboutyou-buttons">
      <button type="button" className="mh-moreaboutyou-outline-button-no-icon" onClick={handlePrevious}>
        Previous
      </button>
      <div style={{ flex: 3 }}>
        <Button
          onPress={handleOpen}
        >
          <div>
            Save and Continue
          </div>
        </Button>
      </div>
    </div>
  );

  const renderModal = () => (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <div className={classes.paper}>
        <div className="mh-whatdoyouwant-modal-header">Complete Profile</div>
        <div className="mh-whatdoyouwant-modal-body">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries.
        </div>
        <div className="mh-whatdoyouwant-modal-button">
          <Button onPress={handleSubmit}>
            <div>
              Submit
            </div>
          </Button>
        </div>
      </div>
    </Modal>
  );

  return (
    <SignupTemplate>
      <form className="mh-moreaboutyou-form">
        {renderForm()}
        {renderButtons()}
        {renderModal()}
      </form>
    </SignupTemplate>
  );
};

export default WhatDoYouWant;
