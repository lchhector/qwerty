import React from 'react';
import PropTypes from 'prop-types';
import './trait.scss';

const traits = {
  Openess: '#E5EEF9',
  Conscientiousness: '#BFD5EF',
  Extraversion: '#A5C4E9',
  Flexibility: '#7FDAE0',
  Resilience: '#BFECEF',
  Proactiveness: '#D9F4F6',
  'Willingness to Learn': '#BFE4F0',
  Entrepreneurial: '#B4D0E4',
};

const Trait = ({ trait, last }) => {
  const traitColor = traits[trait];
  if (last) {
    return (
      <div style={{ backgroundColor: traitColor, marginRight: '0 !important', marginBottom: 0 }} className="mh-trait">
        {trait}
      </div>
    );
  }
  return (
    <div style={{ backgroundColor: traitColor }} className="mh-trait">
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
