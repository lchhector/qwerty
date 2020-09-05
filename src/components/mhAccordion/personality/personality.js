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

const Personality = ({ selectedApplication }) => (
  <AccordionDetails style={{ flexDirection: 'column' }}>
    <div className="mh-accordion-personality">
      <section>
        <div>Diagram analysis</div>
        <div>Color legend</div>
      </section>
      <section>
        <div className="header">Top 3 Traits</div>
        {renderPersonalityTraits(selectedApplication.info.top3Description)}
      </section>
    </div>
    <button type="button" className="mh-accordion-personality__buttons">
      <img src={fileDocumentIcon} alt="img" className="button-icon" />Download Full Report &nbsp;
    </button>
  </AccordionDetails>
);

Personality.propTypes = {
  selectedApplication: PropTypes.shape({
    info: PropTypes.shape({
      top3Description: PropTypes.arrayOf({}),
    }),
  }).isRequired,
};

export default Personality;
