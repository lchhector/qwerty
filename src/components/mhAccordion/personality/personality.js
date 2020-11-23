import React from 'react';
import PropTypes from 'prop-types';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Trait from '../../trait';
import fileDocumentIcon from '../../../assets/file_document_icon.svg';
import './personality.scss';

const renderPersonalityTraits = (traits) => (
  traits.map((trait) => (
    <div className="mh-accordion-personality__traits">
      <div className="mh-accordion-personality__traits--trait">
        <Trait trait={trait.trait} />
      </div>
      <div className="mh-accordion-personality__traits--description">
        {trait.description}
      </div>
    </div>
  ))
);

const Personality = ({ application }) => (
  <AccordionDetails style={{ flexDirection: 'column' }}>
    <div className="mh-accordion-personality">
      <section>
        <div>Diagram analysis</div>
        <div>Color legend</div>
      </section>
      <section>
        <div className="header">Top 3 Traits</div>
        {renderPersonalityTraits(application.top3Traits)}
      </section>
    </div>
    <button type="button" className="mh-accordion-personality__buttons">
      <img src={fileDocumentIcon} alt="img" className="button-icon" />Download Full Report &nbsp;
    </button>
  </AccordionDetails>
);

Personality.propTypes = {
  application: PropTypes.shape({
    top3Traits: PropTypes.arrayOf({
      trait: PropTypes.string,
      description: PropTypes.string,
    }),
  }).isRequired,
};

export default Personality;
