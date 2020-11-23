import React, { useState } from 'react';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import speechBubble from '../../assets/speech_bubble.svg';
import parallelCross from '../../assets/parallel_cross.svg';
import Applications from '../../components/applications';
import MhAccordion from '../../components/mhAccordion';
import fileDocumentIcon from '../../assets/file_document_icon.svg';
import './candidates.scss';

const applicationsList = [
  {
    id: '1',
    name: 'Yeo Rae-Nyse',
    applicationFor: 'Marketing Intern',
    year: '4',
    degree: 'Business Management',
    other: '',
    related: 'Marketing Accounts Executive, Unilever',
    top3: ['Openness', 'Conscientiousness', 'Entrepreneurial'],
    top3Traits: [
      {
        trait: 'Openness',
        description: 'bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in',
      },
      {
        trait: 'Conscientiousness',
        description: 'bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in',
      },
      {
        trait: 'Entrepreneurial',
        description: 'bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in',
      },
    ],
    experiences: [
      {
        title: 'Marketing Accounts Executive',
        company: 'Unilever',
        startDate: 'Jan 2020',
        endDate: 'Jul 2020',
        description: 'gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est',
      },
      {
        title: 'Marketing Accounts Executive',
        company: 'Unilever',
        startDate: 'Jan 2020',
        endDate: 'Jul 2020',
        description: 'Some lorem ipsum gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est',
      },
      {
        title: 'Marketing Accounts Executive',
        company: 'Unilever',
        startDate: 'Jan 2020',
        endDate: 'Jul 2020',
        description: 'Some lorem ipsum gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est',
      },
    ],
    matchingData: {
      softSkills: '75',
      hardSkills: '50',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sapien leo. Phasellus eget enim nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse nulla erat, congue sed tempor a, finibus sed neque. Quisque ultrices faucibus.',
    },
  },
  {
    id: '2',
    name: 'Jolies',
    applicationFor: 'Marketing Intern abc 123 xyz cde',

    year: '4',
    degree: 'Communications and New Media',
    other: '',
    related: 'Marketing Accounts Executive, Unilever',
    top3: ['Openness', 'Conscientiousness', 'Entrepreneurial'],
    top3Traits: [
      {
        trait: 'Openness',
        description: 'bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in',
      },
      {
        trait: 'Conscientiousness',
        description: 'bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in',
      },
      {
        trait: 'Entrepreneurial',
        description: 'bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in',
      },
    ],
    experiences: [
      {
        title: 'Content Marketing',
        company: 'Unilever',
        startDate: 'Jan 2020',
        endDate: 'Jul 2020',
        description: 'gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est',
      },
      {
        title: 'Content Marketing',
        company: 'Unilever',
        startDate: 'Jan 2020',
        endDate: 'Jul 2020',
        description: 'Some lorem ipsum gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est',
      },
      {
        title: 'Content Marketing',
        company: 'Unilever',
        startDate: 'Jan 2020',
        endDate: 'Jul 2020',
        description: 'Some lorem ipsum gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est',
      },
    ],
    matchingData: {
      softSkills: '75',
      hardSkills: '50',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sapien leo. Phasellus eget enim nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse nulla erat, congue sed tempor a, finibus sed neque. Quisque ultrices faucibus.',
    },
  },
  {
    id: '3',
    name: 'Vivian',
    applicationFor: 'Marketing Intern',

    year: '4',
    degree: 'Accountancy',
    other: '',
    related: 'Marketing Accounts Executive, Unilever',
    top3: ['Openness', 'Conscientiousness', 'Entrepreneurial'],
    top3Traits: [
      {
        trait: 'Openness',
        description: 'bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in',
      },
      {
        trait: 'Conscientiousness',
        description: 'bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in',
      },
      {
        trait: 'Entrepreneurial',
        description: 'bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in',
      },
    ],
    experiences: [
      {
        title: 'Corporate Business Development',
        company: 'PWC',
        startDate: 'Jan 2020',
        endDate: 'Jul 2020',
        description: 'gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est',
      },
      {
        title: 'Corporate Business Development',
        company: 'PWC',
        startDate: 'Jan 2020',
        endDate: 'Jul 2020',
        description: 'Some lorem ipsum gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est',
      },
      {
        title: 'Corporate Business Development',
        company: 'PWC',
        startDate: 'Jan 2020',
        endDate: 'Jul 2020',
        description: 'Some lorem ipsum gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est',
      },
    ],
    matchingData: {
      softSkills: '50',
      hardSkills: '40',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sapien leo. Phasellus eget enim nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse nulla erat, congue sed tempor a, finibus sed neque. Quisque ultrices faucibus.',
    },
  },
  {
    id: '4',
    name: 'Guy 1',
    applicationFor: 'Internship position',

    year: '2',
    degree: 'Computer Science',
    other: '',
    related: 'Software engineer, Visa',
    top3: ['Openness', 'Conscientiousness', 'Entrepreneurial'],
    top3Traits: [
      {
        trait: 'Openness',
        description: 'bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in',
      },
      {
        trait: 'Conscientiousness',
        description: 'bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in',
      },
      {
        trait: 'Entrepreneurial',
        description: 'bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in',
      },
    ],
    experiences: [
      {
        title: 'Biz Dev Trainee/Intern',
        company: 'LinkedIn',
        startDate: 'Jan 2020',
        endDate: 'Jul 2020',
        description: 'gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est',
      },
      {
        title: 'Biz Dev Trainee/Intern',
        company: 'LinkedIn',
        startDate: 'Jan 2020',
        endDate: 'Jul 2020',
        description: 'Some lorem ipsum gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est',
      },
      {
        title: 'Biz Dev Trainee/Intern',
        company: 'LinkedIn',
        startDate: 'Jan 2020',
        endDate: 'Jul 2020',
        description: 'Some lorem ipsum gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est',
      },
    ],
    matchingData: {
      softSkills: '35',
      hardSkills: '30',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sapien leo. Phasellus eget enim nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse nulla erat, congue sed tempor a, finibus sed neque. Quisque ultrices faucibus.',
    },
  },
  {
    id: '5',
    name: 'Guy 2',
    applicationFor: 'Internship position',

    year: '2',
    degree: 'Computer Science',
    other: '',
    related: 'Software engineer, Visa',
    top3: ['Openness', 'Conscientiousness', 'Entrepreneurial'],
    top3Traits: [
      {
        trait: 'Openness',
        description: 'bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in',
      },
      {
        trait: 'Conscientiousness',
        description: 'bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in',
      },
      {
        trait: 'Entrepreneurial',
        description: 'bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in',
      },
    ],
    experiences: [
      {
        title: 'Biz Dev Trainee/Intern',
        company: 'Visa',
        startDate: 'Jan 2020',
        endDate: 'Jul 2020',
        description: 'gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est',
      },
      {
        title: 'Biz Dev Trainee/Intern',
        company: 'Visa',
        startDate: 'Jan 2020',
        endDate: 'Jul 2020',
        description: 'Some lorem ipsum gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est',
      },
      {
        title: 'Biz Dev Trainee/Intern',
        company: 'Visa',
        startDate: 'Jan 2020',
        endDate: 'Jul 2020',
        description: 'Some lorem ipsum gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est',
      },
    ],
    matchingData: {
      softSkills: '25',
      hardSkills: '20',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sapien leo. Phasellus eget enim nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse nulla erat, congue sed tempor a, finibus sed neque. Quisque ultrices faucibus.',
    },
  },
];

// cuz it's tightly coupled, better for the component to be composed together
const renderExperiences = (experiences) => (
  experiences.map((exp) => (
    <div className="mh-candidates__application__experiences">
      <div className="mh-candidates__application__experiences__header">{exp.title}, {exp.company}</div>
      <div className="mh-candidates__application__experiences__start-end">{exp.startDate} - {exp.endDate}</div>
      <div className="mh-candidates__application__experiences__description">{exp.description}</div>
    </div>
  ))
);

const Candidates = () => {
  const [currentApplication, setCurrentApplication] = useState('1');

  const onChange = (value) => {
    setCurrentApplication(value);
  };

  const selectedApplication = applicationsList.find((element) => element.id === currentApplication);
  const {
    applicationFor,
    name, year, degree,
  } = selectedApplication;

  return (
    <div className="mh-candidates">
      <section className="mh-candidates__application">
        <header>Application for {applicationFor}</header>
        <div className="mh-candidates__application__candidate-info">
          <div className="mh-candidates__application__candidate-info__details">
            <header>Candidate</header>
            <div>
              <header>{name}</header>
              <div>Year {year}, {degree}</div>
            </div>

          </div>
          <div className="mh-candidates__application__candidate-info__buttons">
            <button type="button" className="btn-interview-candidate">
              <img src={speechBubble} alt="." />
              Interview Candidate
            </button>
            <button type="button" className="btn-reject-and-review">
              <img src={parallelCross} alt="." />
              Reject and Review
            </button>
          </div>
        </div>

        <section className="mh-candidates__application__accordions">
          <MhAccordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: 'black', fontSize: '30px' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="accordion-title">Experiences</div>
            </AccordionSummary>
            <AccordionDetails style={{ flexDirection: 'column' }}>
              {renderExperiences(selectedApplication.experiences)}
              <button type="button" className="mh-candidates__application__accordions__buttons">
                <img src={fileDocumentIcon} alt="img" className="button-icon" />Download CV &nbsp;
              </button>
            </AccordionDetails>
          </MhAccordion>

          <div className="accordion-spacer" />

          <div>
            <MhAccordion className="accordion-class" defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: 'black', fontSize: '30px' }} />}
              >
                <div className="accordion-title">Personality</div>
              </AccordionSummary>
              <MhAccordion.Personality application={selectedApplication} />
            </MhAccordion>
          </div>

          <div className="accordion-spacer" />

          <div>
            <MhAccordion className="accordion-class">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: 'black', fontSize: '30px' }} />}
              >
                <div className="accordion-title">Message</div>
              </AccordionSummary>
              <AccordionDetails>
                Personalised Message
              </AccordionDetails>
            </MhAccordion>
          </div>

        </section>
      </section>

      <section className="mh-candidates__application-list">
        <Applications onChange={onChange} value={currentApplication}>
          {applicationsList.map((application) => (
            <Applications.Item value={application.id} application={application} />
          ))}
        </Applications>
      </section>

    </div>
  );
};

export default Candidates;
