import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import speechBubble from '../../assets/speech_bubble.svg';
import parallelCross from '../../assets/parallel_cross.svg';
import Applications from '../../components/applications';
import './candidates.scss';

const applicationOne = {
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
};

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

const Candidates = () => (
  <div className="mh-candidates">
    <section className="mh-candidates__application">
      <header>Application for Marketing Intern</header>
      <div className="mh-candidates__application__candidate-info">
        <div className="mh-candidates__application__candidate-info__details">
          <header>Candidate</header>
          <div>
            <header>Yeo Rae Nyse</header>
            <div>Year 4, Biz mag</div>
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
        <div className="mh-candidates__application__accordions__experiences">
          <Accordion className="accordion-class">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: 'black', fontSize: '30px' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              Experiences
            </AccordionSummary>
            <AccordionDetails>
              Experiences
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="accordion-spacer" />

        <div className="mh-candidates__application__accordions__personality">
          <Accordion className="accordion-class" defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: 'black', fontSize: '30px' }} />}
            >
              Personality
            </AccordionSummary>
            <AccordionDetails>
              {/* eslint-disable-next-line max-len */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dolor suscipit, iaculis quam et, ullamcorper erat. Pellentesque et nulla non tellus tempus efficitur nec vel eros. Quisque id placerat mauris. In fringilla condimentum sapien. In purus est, aliquam a hendrerit non, porta nec quam. Suspendisse eget ipsum interdum, aliquam metus vitae, finibus justo. Pellentesque eget ornare eros. Nulla mauris nisl, porta non cursus ac, condimentum id nulla. Morbi eleifend, sem at convallis venenatis, metus sapien vestibulum lectus, id consectetur ligula velit in arcu. In vehicula condimentum odio id maximus. Aenean ornare metus metus, id fringilla sem blandit rutrum. Praesent a dui cursus, ornare purus sit amet, sagittis dui. Quisque non tortor venenatis turpis tincidunt sollicitudin sed in ligula. Nullam a malesuada quam, vitae mattis orci. Ut ullamcorper bibendum gravida.
              {/* eslint-disable-next-line max-len */}
              Aliquam malesuada magna in justo congue, in rhoncus felis vestibulum. Curabitur enim arcu, blandit eu ex non, sodales convallis nisi. Nunc pretium ligula iaculis mattis ullamcorper. Nulla eu molestie tellus, at pharetra velit. Curabitur eu consectetur orci, sit amet vestibulum massa. Nullam vitae felis nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin dictum ligula ut velit varius lacinia.
              {/* eslint-disable-next-line max-len */}
              Nullam nec sapien elit. Duis eget libero tempor justo feugiat eleifend eget nec sem. Phasellus sit amet porta nibh. Cras commodo commodo auctor. Morbi suscipit, nisl eget ultricies vestibulum, mauris magna vehicula tortor, at fermentum neque sem ac tellus. Sed ac nibh finibus lorem viverra porttitor at nec diam. Duis gravida tincidunt metus. Cras sagittis massa vitae sem gravida, a volutpat neque placerat. Suspendisse hendrerit ullamcorper tellus et euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="accordion-spacer" />

        <div className="mh-candidates__application__accordions__message">
          <Accordion className="accordion-class">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: 'black', fontSize: '30px' }} />}
            >
              Message
            </AccordionSummary>
            <AccordionDetails>
              Personalised Message
            </AccordionDetails>
          </Accordion>
        </div>

      </section>
    </section>

    <section className="mh-candidates__application-list">
      <Applications>
        <Applications.Item application={applicationOne} />
        <Applications.Item application={applicationTwo} />
        <Applications.Item application={applicationThree} />
      </Applications>
    </section>

  </div>
);

export default Candidates;
