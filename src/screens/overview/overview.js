import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ListItem from '../../components/listItem';
import Card from '../../components/card';
import LatestApplication from '../../components/latestApplication';
import PercentMatch from '../../components/percentMatch';
import Reminder from '../../components/reminder';
import './overview.scss';

const applicationsList = [
  {
    id: '1',
    name: 'Yeo Rae-Nyse',
    applicationFor: 'Marketing Intern',
    info: {
      year: '4',
      degree: 'Business Management',
      other: '',
      related: 'Marketing Accounts Executive, Unilever',
      top3: ['Openess', 'Conscientiousness', 'Entrepreneurial'],
    },
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
    info: {
      year: '4',
      degree: 'Communications and New Media',
      other: '',
      related: 'Marketing Accounts Executive, Unilever',
      top3: ['Openess', 'Conscientiousness', 'Entrepreneurial'],
    },
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
    info: {
      year: '4',
      degree: 'Accountancy',
      other: '',
      related: 'Marketing Accounts Executive, Unilever',
      top3: ['Openess', 'Conscientiousness', 'Entrepreneurial'],
    },
    matchingData: {
      softSkills: '75',
      hardSkills: '50',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sapien leo. Phasellus eget enim nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse nulla erat, congue sed tempor a, finibus sed neque. Quisque ultrices faucibus.',
    },
  },
  {
    id: '4',
    name: 'Guy',
    applicationFor: 'Internship position',
    info: {
      year: '2',
      degree: 'Computer Science',
      other: '',
      related: 'Software engineer, Visa',
      top3: ['Openess', 'Conscientiousness', 'Entrepreneurial'],
    },
    matchingData: {
      softSkills: '50',
      hardSkills: '25',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sapien leo. Phasellus eget enim nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse nulla erat, congue sed tempor a, finibus sed neque. Quisque ultrices faucibus.',
    },
  },
];

// const applicationOne = {
//   id: '1',
//   name: 'Yeo Rae-Nyse',
//   applicationFor: 'Marketing Intern',
//   info: {
//     year: '4',
//     degree: 'Business Management',
//     other: '',
//     related: 'Marketing Accounts Executive, Unilever',
//     top3: ['Openess', 'Conscientiousness', 'Entrepreneurial'],
//   },
//   matchingData: {
//     softSkills: '75',
//     hardSkills: '50',
// eslint-disable-next-line max-len
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sapien leo. Phasellus eget enim nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse nulla erat, congue sed tempor a, finibus sed neque. Quisque ultrices faucibus.',
//   },
// };

const applicationTwo = {
  id: '2',
  name: 'Jolies',
  applicationFor: 'Marketing Intern abc 123 xyz cde',
  info: {
    year: '4',
    degree: 'Communications and New Media',
    other: '',
    related: 'Marketing Accounts Executive, Unilever',
    top3: ['Openess', 'Conscientiousness', 'Entrepreneurial'],
  },
  matchingData: {
    softSkills: '75',
    hardSkills: '50',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sapien leo. Phasellus eget enim nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse nulla erat, congue sed tempor a, finibus sed neque. Quisque ultrices faucibus.',
  },
};

const applicationThree = {
  id: '3',
  name: 'Vivian',
  applicationFor: 'Marketing Intern',
  info: {
    year: '4',
    degree: 'Accountancy',
    other: '',
    related: 'Marketing Accounts Executive, Unilever',
    top3: ['Openess', 'Conscientiousness', 'Entrepreneurial'],
  },
  matchingData: {
    softSkills: '75',
    hardSkills: '50',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sapien leo. Phasellus eget enim nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse nulla erat, congue sed tempor a, finibus sed neque. Quisque ultrices faucibus.',
  },
};

// reminder statuses: pending, shortlisted, interviewed, reviewed, rejected;
const Reminders = [{
  status: 'interviewed', // base on status render required buttons
  interviewDate: '15 july 2020 230pm', // need use standard date format
  application: applicationTwo,
},
{
  status: 'shortlisted', // base on status render required buttons
  interviewDate: '21 july 2020 230pm', // need use standard date format
  application: applicationThree,
}];

const renderLatestApplications = () => {
  const latestTwoApplications = [];
  for (let i = 0; i < 2; i += 1) {
    latestTwoApplications.push(applicationsList[i]);
  }
  return (
    latestTwoApplications.map((application, index) => (
      <section
        className={(index === 1) ? 'mh-overview__applications__container mh-overview__applications__container--last'
          : 'mh-overview__applications__container'}
      >
        <div>
          <LatestApplication application={application} />
        </div>
        <div>
          <PercentMatch matchingData={application.matchingData} />
        </div>
      </section>
    ))
  );
};

const Overview = () => (
  <div className="mh-overview">
    <div className="mh-overview__overview">Overview</div>
    <div className="mh-overview__date">20 July 2020, Monday</div>
    <div className="mh-overview__pink-container mh-overview__pink-container--left">
      <div className="mh-overview__pink-container__content">
        <header>Welcome back, Angelica.</header>
        <div>You have <strong>3</strong> new applications for Marketing Intern.</div>
      </div>
    </div>
    <div className="mh-overview__pink-container mh-overview__pink-container--right">
      <div className="mh-overview__pink-container__content">
        <header>
          <span>
            More <ArrowForwardIcon className="arrow-forward-icon" />
          </span>
        </header>
        <ListItem>Goal: 3 Marketing Interns</ListItem>
        <ListItem>Goal: 1 Finance Intern</ListItem>
      </div>
    </div>

    {/* need to use a mapping function here */}
    <div className="mh-overview__applications">
      <Card>
        <div className="mh-overview__applications__header">
          Latest Applications
          <span className="more-button">
            More <ArrowForwardIcon className="arrow-forward-icon" />
          </span>
        </div>
        {renderLatestApplications()}
      </Card>
    </div>

    <div className="mh-overview__reminders">
      <Card>
        <div className="mh-overview__reminders__header">Reminders</div>
        <section>
          {Reminders.map((existingApplicant) => (
            <Reminder applicant={existingApplicant} />
          ))}
        </section>
      </Card>
    </div>
  </div>
);

export default Overview;
