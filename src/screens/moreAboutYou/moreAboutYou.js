import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';
import SignupTemplate from '../../components/signupTemplate';
import Button from '../../components/button';
import plusIcon from '../../assets/plus_icon_gray.svg';
import minusIcon from '../../assets/minus_icon_gray.svg';
import './moreAboutYou.scss';

const linkArray = [
  {
    id: '1',
    link: '',
  },
  {
    id: '2',
    link: '',
  },
];

const useStyles = makeStyles({
  root: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins, San Serif',
    // whiteSpace: 'nowrap',
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

const MoreAboutYou = () => {
  const history = useHistory();
  const classes = useStyles();
  const [introduction, setIntroduction] = useState('');
  const [MBTI, setMBTI] = useState('');
  const [experiences, setExperiences] = useState([{
    id: '1',
    company: '',
    jobRole: '',
    fromDate: new Date(),
    toDate: new Date(),
    description: '',
  }]);
  const [portfolioLinks, setPortfolioLinks] = useState(linkArray);

  const handleChange = (event) => {
    if (event.target.name === 'introduction') {
      setIntroduction(event.target.value);
    } else if (event.target.name === 'mbti') {
      setMBTI(event.target.value);
    }
  };

  const handleLinksChange = (event) => {
    const linkIndex = portfolioLinks.findIndex((link) => link.id === event.target.id);
    portfolioLinks[linkIndex].link = event.target.value;
    setPortfolioLinks([...portfolioLinks]);
  };

  const handleExperiencesChange = (event) => {
    const expIndex = experiences.findIndex((exp) => exp.id === event.target.id);
    experiences[expIndex][event.target.name] = event.target.value;
    setExperiences([...experiences]);
  };

  const handleExpDateChange = (event, id, date) => {
    if (date === 'fromDate') {
      const expIndex = experiences.findIndex((exp) => exp.id === id);
      experiences[expIndex].fromDate = event;
      setExperiences([...experiences]);
    } else if (date === 'toDate') {
      const expIndex = experiences.findIndex((exp) => exp.id === id);
      experiences[expIndex].toDate = event;
      setExperiences([...experiences]);
    }
  };

  const addLink = () => {
    const uuid = uuidv4();
    const newArray = portfolioLinks.concat({
      id: uuid,
      link: '',
    });
    setPortfolioLinks(newArray);
  };

  const removeLink = (id) => {
    const newArray = portfolioLinks.filter((link) => link.id !== id);
    setPortfolioLinks(newArray);
  };

  const addExperience = () => {
    const uuid = uuidv4();
    const newArray = experiences.concat({
      id: uuid,
      company: '',
      jobRole: '',
      fromDate: new Date(),
      toDate: new Date(),
      description: '',
    });
    setExperiences(newArray);
  };

  const removeExperience = (id) => {
    const newArray = experiences.filter((link) => link.id !== id);
    setExperiences(newArray);
  };

  const renderIntroduction = () => (
    <FormControl className="mh-mt-20">
      <InputLabel shrink id="introduction-label" classes={{ root: classes.root }}>
        Introduce Yourself
      </InputLabel>
      <br />
      <TextField variant="outlined" name="introduction" value={introduction} onChange={handleChange} multiline />
    </FormControl>
  );

  const renderMBTI = () => (
    <FormControl className="mh-mt-20">
      <InputLabel shrink id="faculty-and-major-label" classes={{ root: classes.root }}>
        What is your MBTI?
      </InputLabel>
      <BootstrapInput name="mbti" value={MBTI} onChange={handleChange} />
    </FormControl>
  );

  const renderDatepicker = (fromDate, toDate, id) => (
    <section className="mh-mt-20">
      <div className="mh-whoareyou-availability-date">
        <div className="mh-mr-10">From</div>
        <KeyboardDatePicker
          id={id}
          className="mh-datepicker-width"
          autoOk
          variant="inline"
          inputVariant="outlined"
          format="DD/MM/YY"
          name="fromDate"
          value={fromDate}
          InputAdornmentProps={{ position: 'start' }}
          onChange={(event) => handleExpDateChange(event, id, 'fromDate')}
        />
        <div className="mh-ml-10 mh-mr-10">To</div>
        <KeyboardDatePicker
          id={id}
          className="mh-datepicker-width"
          autoOk
          variant="inline"
          inputVariant="outlined"
          format="DD/MM/YY"
          name="toDate"
          value={toDate}
          minDate={fromDate}
          InputAdornmentProps={{ position: 'start' }}
          onChange={(event) => handleExpDateChange(event, id, 'toDate')}
        />
      </div>
    </section>
  );

  const renderExperiences = () => (
    <>
      <InputLabel shrink id="faculty-and-major-label" classes={{ root: classes.root }} className="mh-mt-20 mh-mb-5">
        Experiences
      </InputLabel>

      {experiences.map((exp, index) => {
        let notFirst = false;
        const {
          id, company, jobRole, fromDate, toDate, description,
        } = exp;
        if (index !== 0) notFirst = true;
        return (
          <React.Fragment key={exp.id}>
            {notFirst && (
              <div className="mh-moreaboutyou-exp-divider mh-mt-10">
                ----------------
              </div>
            )}
            <FormControl>
              <BootstrapInput id={id} name="company" value={company} onChange={handleExperiencesChange} placeholder="Company" />
            </FormControl>

            <FormControl className="mh-mt-10">
              <BootstrapInput id={id} name="jobRole" value={jobRole} onChange={handleExperiencesChange} placeholder="Job Role" />
            </FormControl>

            {renderDatepicker(fromDate, toDate, id)}

            <TextField
              id={id}
              variant="outlined"
              name="description"
              value={description}
              onChange={handleExperiencesChange}
              multiline
              className="mh-mt-20"
              placeholder="Description"
              rows={4}
            />

            <div className="mh-moreaboutyou-float-right-half-button">
              <button type="button" className="mh-moreaboutyou-outline-button" onClick={() => removeExperience(id)}>
                <img src={minusIcon} alt="+" className="mh-moreaboutyou-plus-icon" />
                Delete Experience
              </button>
            </div>
          </React.Fragment>
        );
      })}

      <button type="button" className="mh-moreaboutyou-outline-button mh-mt-10" onClick={() => addExperience()}>
        <img src={plusIcon} alt="+" className="mh-moreaboutyou-plus-icon" />
        Add Experiences
      </button>
    </>
  );

  const renderPortfolioLink = () => (
    <>
      <InputLabel shrink classes={{ root: classes.root }} className="mh-mt-20 mh-mb-5">
        Portfolio Link
      </InputLabel>
      {portfolioLinks.map((link) => (
        <FormControl key={link.id}>
          <div className="mh-moreaboutyou-portfolio-links">
            <BootstrapInput id={link.id} name={link.id} value={link.link} onChange={handleLinksChange} className="mh-flex-1" />
            <button type="button" className="mh-moreaboutyou-icon-button" onClick={() => removeLink(link.id)}>
              <img src={minusIcon} alt="-" />
            </button>
          </div>
        </FormControl>
      ))}

      <div className="mh-moreaboutyou-float-right-half-button">
        <button type="button" className="mh-moreaboutyou-outline-button" onClick={() => addLink()}>
          <img src={plusIcon} alt="+" className="mh-moreaboutyou-plus-icon" />
          Add Links
        </button>
      </div>
    </>
  );

  const renderUploadCV = () => (
    <>
      <InputLabel shrink id="upload-cv-label" classes={{ root: classes.root }} className="mh-mt-20">
        Curriculum Vitae(CV) or Resume
      </InputLabel>
      <label htmlFor="upload-cv" className="mh-moreaboutyou-upload-container">
        <div>Drag and drop your CV/Resume or click here to attach your file.</div>
        <div>Logo should be at least 3mb and either .doc, .docx, or .pdf.</div>
      </label>
      <TextField type="file" style={{ display: 'none' }} id="upload-cv" name="upload-cv" />
    </>
  );

  const handlePrevious = () => {
    history.goBack();
  };

  const renderButtons = () => (
    <div className="mh-moreaboutyou-buttons">
      <button type="button" className="mh-moreaboutyou-outline-button-no-icon" onClick={handlePrevious}>
        Previous
      </button>
      <div style={{ flex: 3 }}>
        <Button
          onPress={() => {
            const details = {
              introduction,
              MBTI,
              experiences,
              portfolioLinks,
            };
            // eslint-disable-next-line no-console
            console.log(details, 'MOREABOUTYOU OBJECT');
            history.push('/what-do-you-want');
          }}
        >
          <div>
            Save and Continue
          </div>
        </Button>
      </div>
    </div>
  );

  return (
    <SignupTemplate>
      <form className="mh-moreaboutyou-form">
        {renderIntroduction()}
        {renderMBTI()}
        {renderExperiences()}
        {renderPortfolioLink()}
        {renderUploadCV()}
        {renderButtons()}
      </form>
    </SignupTemplate>
  );
};

export default MoreAboutYou;
