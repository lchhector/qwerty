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
        trait: 'Resilience',
        description: 'Desired trait description...',
      },
      {
        trait: 'Proactiveness',
        description: 'Desired trait description...',
      },
      {
        trait: 'Entrepreneurial',
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
        trait: 'Resilience',
        description: 'Desired trait description...',
      },
      {
        trait: 'Proactiveness',
        description: 'Desired trait description...',
      },
      {
        trait: 'Entrepreneurial',
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
        trait: 'Resilience',
        description: 'Desired trait description...',
      },
      {
        trait: 'Proactiveness',
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

const Postings = () => {
  const [currentPosting, setCurrentPosting] = useState('1');
  const onChange = (value) => {
    setCurrentPosting(value);
  };

  const selectedPosting = companyPostings.find((element) => element.id === currentPosting);
  const {
    companyInfo,
    role,
    employmentType,
    pay,
    top3Traits,
  } = selectedPosting;
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
        >
          <img src={plusIcon} alt="+" className="plus-icon" />
          <div>Create New Job Posting</div>
        </button>
      </section>

      <section className="mh-postings__posting-details">
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
                {/* {renderExperiences(selectedApplication.experiences)} */}
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
                  Skillset
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
                <AccordionDetails style={{ flexDirection: 'column' }}>
                  <div className="mh-candidates__application__accordions__personality">
                    <section>
                      <div>Diagram analysis</div>
                      <div>Color legend</div>
                    </section>
                    <section>
                      <div className="header">Top 3 Traits</div>
                      {/* {renderPersonalityTraits(selectedApplication.info.top3Description)} */}
                    </section>
                  </div>
                </AccordionDetails>
              </MhAccordion>
            </div>

          </section>
        </section>
      </section>
    </div>
  );
};

export default Postings;
