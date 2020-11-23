import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { FormGroup, Input } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import SignupTemplate from '../../components/signupTemplate';
import Button from '../../components/button';
import './whoAreYou.scss';

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

const WhoAreYou = () => {
  const history = useHistory();
  const classes = useStyles();
  const [yearOfStudy, setStudyYear] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [faculty, setFaculty] = useState('');
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [jobType, setJobType] = useState({
    freelance: true,
    parttime: false,
    fulltime: false,
    contract: false,
  });
  const [interestedIndustries, setInterestedIndustries] = useState({
    bankingAndFinance: true,
    beautyAndFashion: false,
    communications: false,
    education: false,
    ecommerce: false,
    fmcg: false,
    fnb: false,
    healthcare: false,
    mediaAndAdvertising: false,
    oilGasMining: false,
    social: false,
    technology: false,
    otherIndustries: false,
    otherIndustriesText: '',
  });
  const [interestedRoles, setInterestedRoles] = useState({
    businessDvelopement: true,
    designer: false,
    dataScientist: false,
    engineer: false,
    finance: false,
    hr: false,
    marketing: false,
    productManagement: false,
    softwareDeveloper: false,
    otherRoles: false,
    otherRolesText: 'abc',
  });
  const [companySize, setCompanySize] = useState({
    mnc: true,
    sme: false,
    startup: false,
  });
  const [typeOfJob, setTypeOfJob] = useState({
    internship: true,
    traineeship: false,
    fullTime: false,
  });

  const {
    freelance, parttime, fulltime, contract,
  } = jobType;
  const {
    bankingAndFinance, beautyAndFashion, communications,
    education, ecommerce, fmcg, fnb, healthcare, mediaAndAdvertising,
    oilGasMining, social, technology, otherIndustries, otherIndustriesText,
  } = interestedIndustries;
  const {
    businessDvelopement, designer, dataScientist,
    engineer, finance, hr, marketing, productManagement,
    softwareDeveloper, otherRoles, otherRolesText,
  } = interestedRoles;
  const {
    mnc, sme, startup,
  } = companySize;
  const {
    internship, traineeship, fullTime,
  } = typeOfJob;

  const handleChange = (event) => {
    if (event.target.name === 'educationLevel') {
      setEducationLevel(event.target.value);
    } else if (event.target.name === 'yearOfStudy') {
      setStudyYear(event.target.value);
    } else if (event.target.name === 'faculty') {
      setFaculty(event.target.value);
    }
  };

  const handleDateChange = (date, field) => {
    if (field === 'fromDate') {
      setFromDate(date);
    } else if (field === 'toDate') {
      setToDate(date);
    }
  };

  const handleChangeJobType = (event) => {
    setJobType({
      ...jobType, [event.target.name]: event.target.checked,
    });
  };
  const handleChangeInterestedIndustries = (event) => {
    if (event.target.name === 'otherIndustriesText') {
      setInterestedIndustries({
        ...interestedIndustries, [event.target.name]: event.target.value,
      });
    } else {
      setInterestedIndustries({
        ...interestedIndustries, [event.target.name]: event.target.checked,
      });
    }
  };
  const handleChangeInterestedRoles = (event) => {
    if (event.target.name === 'otherRolesText') {
      setInterestedRoles({
        ...interestedRoles, [event.target.name]: event.target.value,
      });
    } else {
      setInterestedRoles({
        ...interestedRoles, [event.target.name]: event.target.checked,
      });
    }
  };
  const handleChangeCompanySize = (event) => {
    setCompanySize({
      ...companySize, [event.target.name]: event.target.checked,
    });
  };
  const handleChangeTypeOfJob = (event) => {
    setTypeOfJob({
      ...typeOfJob, [event.target.name]: event.target.checked,
    });
  };

  const customCheckBoxJobType = (name, boolValue) => (
    <Checkbox
      checked={boolValue}
      className={classes.customPadding}
      icon={<CheckBoxOutlineBlankIcon style={{ fontSize: '28px', color: '#7FABE044' }} />}
      checkedIcon={<CheckBoxIcon style={{ fontSize: '28px' }} />}
      onChange={handleChangeJobType}
      name={name}
    />
  );
  const customCheckBoxInterestedIndustries = (name, boolValue) => (
    <Checkbox
      checked={boolValue}
      className={classes.customPadding}
      icon={<CheckBoxOutlineBlankIcon style={{ fontSize: '28px', color: '#7FABE044' }} />}
      checkedIcon={<CheckBoxIcon style={{ fontSize: '28px' }} />}
      onChange={handleChangeInterestedIndustries}
      name={name}
    />
  );
  const customCheckBoxInterestedRoles = (name, boolValue) => (
    <Checkbox
      checked={boolValue}
      className={classes.customPadding}
      icon={<CheckBoxOutlineBlankIcon style={{ fontSize: '28px', color: '#7FABE044' }} />}
      checkedIcon={<CheckBoxIcon style={{ fontSize: '28px' }} />}
      onChange={handleChangeInterestedRoles}
      name={name}
    />
  );
  const customCheckBoxCompanySize = (name, boolValue) => (
    <Checkbox
      checked={boolValue}
      className={classes.customPadding}
      icon={<CheckBoxOutlineBlankIcon style={{ fontSize: '28px', color: '#7FABE044' }} />}
      checkedIcon={<CheckBoxIcon style={{ fontSize: '28px' }} />}
      onChange={handleChangeCompanySize}
      name={name}
    />
  );
  const customCheckBoxTypeOfJob = (name, boolValue) => (
    <Checkbox
      checked={boolValue}
      className={classes.customPadding}
      icon={<CheckBoxOutlineBlankIcon style={{ fontSize: '28px', color: '#7FABE044' }} />}
      checkedIcon={<CheckBoxIcon style={{ fontSize: '28px' }} />}
      onChange={handleChangeTypeOfJob}
      name={name}
    />
  );

  const renderEducationLevel = () => (
    <FormControl>
      <InputLabel shrink id="education-level-label" classes={{ root: classes.root }}>
        Education Level
      </InputLabel>
      <Select
        name="educationLevel"
        labelId="education-level-label"
        id="education-level"
        value={educationLevel}
        onChange={handleChange}
        displayEmpty
        input={<BootstrapInput />}
      >
        <MenuItem value="">Select One</MenuItem>
        <MenuItem value="tertiary">Tiertiary</MenuItem>
        <MenuItem value="bachelor's">Bachelor&apos;s</MenuItem>
        <MenuItem value="masters">Masters</MenuItem>
      </Select>
    </FormControl>
  );

  const renderYearOfStudy = () => (
    <FormControl className="mh-mt-20">
      <InputLabel shrink id="year-of-study-label" classes={{ root: classes.root }}>
        Year of Study
      </InputLabel>
      <Select
        name="yearOfStudy"
        labelId="year-of-study-label"
        id="year-of-study"
        value={yearOfStudy}
        onChange={handleChange}
        displayEmpty
        input={<BootstrapInput />}
      >
        <MenuItem value="">Select One</MenuItem>
        <MenuItem value={1}>One</MenuItem>
        <MenuItem value={2}>Two</MenuItem>
        <MenuItem value={3}>Three</MenuItem>
        <MenuItem value={4}>Four</MenuItem>
      </Select>
    </FormControl>
  );

  const renderFaculty = () => (
    <FormControl className="mh-mt-20">
      <InputLabel shrink id="faculty-and-major-label" classes={{ root: classes.root }}>
        Faculty & Major
      </InputLabel>
      <BootstrapInput name="faculty" value={faculty} onChange={handleChange} />
    </FormControl>
  );

  const renderAvailability = () => (
    <section className="mh-mt-20">
      <InputLabel shrink id="availability-label" classes={{ root: classes.root }}>
        Availability
      </InputLabel>
      <div className="mh-whoareyou-availability-date">
        <div className="mh-mr-10">From</div>
        <KeyboardDatePicker
          className="mh-datepicker-width"
          autoOk
          variant="inline"
          inputVariant="outlined"
          format="DD/MM/YY"
          name="fromDate"
          value={fromDate}
          InputAdornmentProps={{ position: 'start' }}
          onChange={(date) => handleDateChange(date, 'fromDate')}
        />
        <div className="mh-ml-10 mh-mr-10">To</div>
        <KeyboardDatePicker
          className="mh-datepicker-width"
          autoOk
          variant="inline"
          inputVariant="outlined"
          format="DD/MM/YY"
          name="toDate"
          value={toDate}
          minDate={fromDate}
          InputAdornmentProps={{ position: 'start' }}
          onChange={(date) => handleDateChange(date, 'toDate')}
        />
      </div>
    </section>
  );

  const renderJobType = () => (
    <FormGroup className="mh-mt-20">
      <InputLabel shrink id="job-type-label" classes={{ root: classes.root }}>
        Job Type
      </InputLabel>
      <FormControlLabel
        control={customCheckBoxJobType('freelance', freelance)}
        label="Freelance"
      />
      <FormControlLabel
        control={customCheckBoxJobType('parttime', parttime)}
        label="Part-Time"
      />
      <FormControlLabel
        control={customCheckBoxJobType('fulltime', fulltime)}
        label="Full-Time"
      />
      <FormControlLabel
        control={customCheckBoxJobType('contract', contract)}
        label="Contract"
      />
    </FormGroup>
  );

  const renderInterestedIndustries = () => (
    <FormGroup className="mh-mt-20">
      <InputLabel shrink id="interested=industries-label" classes={{ root: classes.root }}>
        Interested Industries
      </InputLabel>
      <FormControlLabel
        control={customCheckBoxInterestedIndustries('bankingAndFinance', bankingAndFinance)}
        label="Banking and Finance"
      />
      <FormControlLabel
        control={customCheckBoxInterestedIndustries('beautyAndFashion', beautyAndFashion)}
        label="Beauty and Fashion"
      />
      <FormControlLabel
        control={customCheckBoxInterestedIndustries('communications', communications)}
        label="Communications, Public Relations, Journalism"
      />
      <FormControlLabel
        control={customCheckBoxInterestedIndustries('education', education)}
        label="Education"
      />
      <FormControlLabel
        control={customCheckBoxInterestedIndustries('ecommerce', ecommerce)}
        label="e-Commerce"
      />
      <FormControlLabel
        control={customCheckBoxInterestedIndustries('fmcg', fmcg)}
        label="Fast Moving Consumer Goods (FMGC)"
      />
      <FormControlLabel
        control={customCheckBoxInterestedIndustries('fnb', fnb)}
        label="Food and Beverages (F&B)"
      />
      <FormControlLabel
        control={customCheckBoxInterestedIndustries('healthcare', healthcare)}
        label="Healthcare"
      />
      <FormControlLabel
        control={customCheckBoxInterestedIndustries('mediaAndAdvertising', mediaAndAdvertising)}
        label="Media, Advertising and Social Media"
      />
      <FormControlLabel
        control={customCheckBoxInterestedIndustries('oilGasMining', oilGasMining)}
        label="Oil, Gas and Mining"
      />
      <FormControlLabel
        control={customCheckBoxInterestedIndustries('social', social)}
        label="Social"
      />
      <FormControlLabel
        control={customCheckBoxInterestedIndustries('technology', technology)}
        label="Technology"
      />
      <div>
        <FormControlLabel
          control={customCheckBoxInterestedIndustries('otherIndustries', otherIndustries)}
          label="Others, "
        />
        <FormControl className="mh-whoareyou-others">
          <Input
            classes={{ input: classes.others }}
            name="otherIndustriesText"
            value={otherIndustriesText}
            onChange={handleChangeInterestedIndustries}
          />
        </FormControl>
      </div>
    </FormGroup>
  );

  const renderInterestedRoles = () => (
    <FormGroup className="mh-mt-20">
      <InputLabel shrink id="interested-roles-label" classes={{ root: classes.root }}>
        Interested Roles
      </InputLabel>
      <FormControlLabel
        control={customCheckBoxInterestedRoles('businessDvelopement', businessDvelopement)}
        label="Business Development"
      />
      <FormControlLabel
        control={customCheckBoxInterestedRoles('designer', designer)}
        label="Designer"
      />
      <FormControlLabel
        control={customCheckBoxInterestedRoles('dataScientist', dataScientist)}
        label="Data Scientist"
      />
      <FormControlLabel
        control={customCheckBoxInterestedRoles('engineer', engineer)}
        label="Engineer"
      />
      <FormControlLabel
        control={customCheckBoxInterestedRoles('finance', finance)}
        label="Finance"
      />
      <FormControlLabel
        control={customCheckBoxInterestedRoles('hr', hr)}
        label="Human Resources (HR)"
      />
      <FormControlLabel
        control={customCheckBoxInterestedRoles('marketing', marketing)}
        label="Marketing"
      />
      <FormControlLabel
        control={customCheckBoxInterestedRoles('productManagement', productManagement)}
        label="Product Management"
      />
      <FormControlLabel
        control={customCheckBoxInterestedRoles('softwareDeveloper', softwareDeveloper)}
        label="Software Developer"
      />
      <div>
        <FormControlLabel
          control={customCheckBoxInterestedRoles('otherRoles', otherRoles)}
          label="Others, "
        />
        <FormControl className="mh-whoareyou-others">
          <Input
            classes={{ input: classes.others }}
            name="otherRolesText"
            value={otherRolesText}
            onChange={handleChangeInterestedRoles}
          />
        </FormControl>
      </div>
    </FormGroup>
  );

  const renderCompanySize = () => (
    <FormGroup className="mh-mt-20">
      <InputLabel shrink id="company-size-label" classes={{ root: classes.root }}>
        Company Size
      </InputLabel>
      <FormControlLabel
        control={customCheckBoxCompanySize('mnc', mnc)}
        label="Multinational Corporation (MNC)"
      />
      <FormControlLabel
        control={customCheckBoxCompanySize('sme', sme)}
        label="Small and Medium Companies (SME)"
      />
      <FormControlLabel
        control={customCheckBoxCompanySize('startup', startup)}
        label="Start-up"
      />
    </FormGroup>
  );

  const renderTypeOfJob = () => (
    <FormGroup className="mh-mt-20">
      <InputLabel shrink id="type-of-job-label" classes={{ root: classes.root }}>
        Type of Job
      </InputLabel>
      <FormControlLabel
        control={customCheckBoxTypeOfJob('internship', internship)}
        label="Internship"
      />
      <FormControlLabel
        control={customCheckBoxTypeOfJob('traineeship', traineeship)}
        label="Traineeship"
      />
      <FormControlLabel
        control={customCheckBoxTypeOfJob('fullTime', fullTime)}
        label="Full-Time"
      />
    </FormGroup>
  );

  const saveAndContinue = () => {
    const details = {
      educationLevel,
      yearOfStudy,
      faculty,
      fromDate: JSON.stringify(fromDate),
      toDate: JSON.stringify(toDate),
      jobType,
      interestedIndustries,
      interestedRoles,
      companySize,
      typeOfJob,
    };
    // eslint-disable-next-line no-console
    console.log(details, 'WHOAREYOU OBJECT');
    history.push('/more-about-you');
  };

  return (
    <SignupTemplate>
      <form className="mh-whoareyou-form">
        {renderEducationLevel()}
        {renderYearOfStudy()}
        {renderFaculty()}
        {renderAvailability()}
        {renderJobType()}
        {renderInterestedIndustries()}
        {renderInterestedRoles()}
        {renderCompanySize()}
        {renderTypeOfJob()}
      </form>
      <div className="mh-whoareyou-save-btn">
        <Button onPress={() => saveAndContinue()}>
          <div>
            Save and Continue
          </div>
        </Button>
      </div>

    </SignupTemplate>
  );
};

export default WhoAreYou;
