import React, { useState } from 'react';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import JobPostings from '../../components/jobPostings';
import MhAccordion from '../../components/mhAccordion';
import plusIcon from '../../assets/plus_icon.svg';
import editIcon from '../../assets/edit_icon.svg';
import './postings.scss';

const companyPostings = [
  {
    id: '1',
    role: 'Marketing Intern',
    employmentType: ['Part-time', 'Full-time'],
    pay: '3000',
    top3Traits: [
      {
        trait: 'Openness',
        description: 'Desired trait description...',
      },
      {
        trait: 'Conscientiousness',
        description: 'Desired trait description...',
      },
      {
        trait: 'Extraversion',
        description: 'Desired trait description...',
      },
    ],
    companyInfo: {
      companyName: 'Google',
      companyLogo: 'https://cdn.worldvectorlogo.com/logos/google-icon.svg',
      location: 'MapleTree',
      country: 'Singapore',
      state: '',
    },
  },
  {
    id: '2',
    role: 'Marketing Intern 2',
    employmentType: ['Part-time', 'Full-time'],
    pay: '3000',
    top3Traits: [
      {
        trait: 'Flexibility',
        description: 'Desired trait description...',
      },
      {
        trait: 'Resilience',
        description: 'Desired trait description...',
      },
      {
        trait: 'Proactiveness',
        description: 'Desired trait description...',
      },
    ],
    companyInfo: {
      companyName: 'Googlier',
      companyLogo: 'https://cdn.worldvectorlogo.com/logos/google-icon.svg',
      location: 'MapleTree',
      country: 'Singapore',
      state: '',
    },
  },
  {
    id: '3',
    role: 'Marketing Intern 3',
    employmentType: ['Part-time', 'Full-time'],
    pay: '3000',
    top3Traits: [
      {
        trait: 'Willingness',
        description: 'Desired trait description...',
      },
      {
        trait: 'Entrepreneurial',
        description: 'Desired trait description...',
      },
      {
        trait: 'Entrepreneurial',
        description: 'Desired trait description...',
      },
    ],
    companyInfo: {
      companyName: 'Googliest',
      companyLogo: 'https://cdn.worldvectorlogo.com/logos/google-icon.svg',
      location: 'MapleTree',
      country: 'Singapore',
      state: '',
    },
  },
];

const renderNewForm = () => (
  <form>
    <div>Create new job posting, x button</div>
    <div>
      <div>
        <label>Job title</label>
        <input type="text" />
      </div>
      <div>
        <label>Number of interns</label>
        <input type="text" />
      </div>
    </div>
    <div>
      <label>Job Type</label>
      <div>Checkbox options x4</div>
    </div>
    <div>
      <div>
        <label>Duration of internship</label>
        <input type="text" />
      </div>
      <div>
        <label>Working hours</label>
        <input type="text" />
      </div>
    </div>

    <div>Remuneration, deadline</div>
    <div>Job overview</div>
    <div>Job description</div>
    <div>Hard skills</div>
    <div>Search bar for hard skills</div>
    <div>Rank traits</div>
    <div>Disclaimer</div>
    <div>Buttons: Save draft, publish listing</div>

  </form>
);

const renderPostingDetails = (selectedPosting) => {
  const {
    companyInfo,
    role,
    employmentType,
    pay,
  } = selectedPosting;
  return (
    <>
      <div className="mh-postings__posting-details__small-icons">
        <img src={editIcon} alt="" className="--edit-icon" />
        <img src={plusIcon} alt="" className="--plus-icon" />
      </div>
      <section className="mh-postings__posting-details__content">
        <div className="mh-postings__posting-details__content__header">
          <img src={companyInfo.companyLogo} alt="" className="company-logo" />
          <div className="mh-postings__posting-details__content__header__text">
            <div className="--bold">{role}</div>
            <div>{companyInfo.companyName}</div>
          </div>
        </div>
        <div className="mh-postings__posting-details__content__location-duration-applicants">
          {companyInfo.location}, {companyInfo.country}
          <span>Posted 1 week ago, 12</span>
        </div>
        <div>
          {employmentType.map((type, index) => (
            <span>{type}{index < employmentType.length - 1 ? ', ' : ''}</span>
          ))} ${pay}/mth
        </div>
        <section className="mh-postings__posting-details__content__accordions">
          <MhAccordion className="blue-border">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: 'black', fontSize: '30px' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="accordion-title">Job Overview</div>
            </AccordionSummary>
            <AccordionDetails style={{ flexDirection: 'column' }}>
              Placeholder
            </AccordionDetails>
          </MhAccordion>

          <div className="accordion-spacer" />

          <div>
            <MhAccordion className="blue-border">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: 'black', fontSize: '30px' }} />}
              >
                <div className="accordion-title">Skills</div>
              </AccordionSummary>
              <AccordionDetails>
                Skillsets
              </AccordionDetails>
            </MhAccordion>
          </div>

          <div className="accordion-spacer" />

          <div>
            <MhAccordion className="blue-border" defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: 'black', fontSize: '30px' }} />}
              >
                <div className="accordion-title">Personality</div>
              </AccordionSummary>
              <MhAccordion.Personality application={selectedPosting} company />
            </MhAccordion>
          </div>
        </section>
      </section>
    </>
  );
};

const Postings = () => {
  const [currentPosting, setCurrentPosting] = useState('1');
  const onChange = (value) => {
    setCurrentPosting(value);
  };

  let createNewPosting = false;
  let selectedPosting = null;
  if (currentPosting === 'create-new') {
    createNewPosting = true;
  } else {
    selectedPosting = companyPostings.find((element) => element.id === currentPosting);
  }
  return (
    <div className="mh-postings">
      <section className="mh-postings__list">
        <div className="mh-postings__list__search-bar">
          <div className="mh-postings__list__search-bar__search-icon">
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search Job Postings"
            inputProps={{ 'aria-label': 'search' }}
            className="mh-postings__list__search-bar__input-base"
          />
        </div>
        <JobPostings value={currentPosting} onChange={onChange}>
          {companyPostings.map((posting) => (
            <JobPostings.Item value={posting.id} item={posting} />
          ))}
        </JobPostings>
        <button
          type="button"
          className="mh-postings__create-new-button"
          onClick={() => setCurrentPosting('create-new')}
        >
          <img src={plusIcon} alt="+" className="plus-icon" />
          <div>Create New Job Posting</div>
        </button>
      </section>

      <section className="mh-postings__posting-details">
        {
          (createNewPosting) ? renderNewForm() : renderPostingDetails(selectedPosting)
        }
        {/* <div className="mh-postings__posting-details__small-icons">
          <img src={editIcon} alt="" className="--edit-icon" />
          <img src={plusIcon} alt="" className="--plus-icon" />
        </div>
        <section className="mh-postings__posting-details__content">
          <div className="mh-postings__posting-details__content__header">
            <img src={companyInfo.companyLogo} alt="" className="company-logo" />
            <div className="mh-postings__posting-details__content__header__text">
              <div className="--bold">{role}</div>
              <div>{companyInfo.companyName}</div>
            </div>
          </div>
          <div className="mh-postings__posting-details__content__location-duration-applicants">
            {companyInfo.location}, {companyInfo.country}
            <span>Posted 1 week ago, 12</span>
          </div>
          <div>
            {employmentType.map((type, index) => (
              <span>{type}{index < employmentType.length - 1 ? ', ' : ''}</span>
            ))} ${pay}/mth
          </div>
          <section className="mh-postings__posting-details__content__accordions">
            <MhAccordion className="blue-border">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: 'black', fontSize: '30px' }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className="accordion-title">Job Overview</div>
              </AccordionSummary>
              <AccordionDetails style={{ flexDirection: 'column' }}>
                Placeholder
              </AccordionDetails>
            </MhAccordion>

            <div className="accordion-spacer" />

            <div>
              <MhAccordion className="blue-border">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: 'black', fontSize: '30px' }} />}
                >
                  <div className="accordion-title">Skills</div>
                </AccordionSummary>
                <AccordionDetails>
                  Skillsets
                </AccordionDetails>
              </MhAccordion>
            </div>

            <div className="accordion-spacer" />

            <div>
              <MhAccordion className="blue-border" defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: 'black', fontSize: '30px' }} />}
                >
                  <div className="accordion-title">Personality</div>
                </AccordionSummary>
                <MhAccordion.Personality application={selectedPosting} company />
              </MhAccordion>
            </div>

          </section>
        </section> */}
      </section>
    </div>
  );
};

export default Postings;
