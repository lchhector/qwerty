import React from 'react';
import PropTypes from 'prop-types';
import './trait.scss';

const traits = {
  Openness: '#DCECC9',
  Conscientiousness: '#B3DDCC',
  Extraversion: '#8ACDCE',
  Flexibility: '#46AACE',
  Resilience: '#3577AE',
  Proactiveness: '#1C2B7F',
  Willingness: '#162065',
  Entrepreneurial: '#11174B',
};

const traitArray = ['Openness', 'Conscientiousness', 'Extraversion',
  'Flexibility', 'Resilience', 'Proactiveness', 'Willingness', 'Entrepreneurial'];
const Trait = ({ trait, last }) => {
  const traitColor = traits[trait];
  let whiteText = false;

  if (traitArray.indexOf(trait) > 3) {
    whiteText = true;
  }

  if (last) {
    return (
      <div
        style={{
          backgroundColor: traitColor, marginRight: '0 !important', marginBottom: 0, color: (whiteText) ? 'white' : 'black',
        }}
        className="mh-trait"
      >
        {trait}
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: traitColor, color: (whiteText) ? 'white' : 'black' }} className="mh-trait">
      {trait}
    </div>
  );
};

Trait.propTypes = {
  trait: PropTypes.string.isRequired,
  last: PropTypes.bool,
};

Trait.defaultProps = {
  last: false,
};

export default Trait;
