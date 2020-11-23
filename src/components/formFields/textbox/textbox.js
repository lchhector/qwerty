import React from 'react';
import PropTypes from 'prop-types';
import './textbox.scss';

const Textbox = ({
  label, field, currentValue, setValue,
}) => {
  const lowerCaseLabel = label.toLowerCase();

  const handleChange = (e) => {
    if (field === null) {
      setValue(e.target.value);
    } else {
      setValue(field, e.target.value);
    }
  };

  return (
    <div className="mh-textbox">
      <label htmlFor={lowerCaseLabel} className="mh-textbox__label">{label}</label><br />
      <input
        type={lowerCaseLabel}
        id={lowerCaseLabel}
        value={currentValue}
        onChange={(e) => handleChange(e)}
        className="mh-textbox__input"
      />
      <br />
    </div>
  );
};

Textbox.propTypes = {
  label: PropTypes.string.isRequired,
  currentValue: PropTypes.string,
  field: PropTypes.string,
  setValue: PropTypes.func.isRequired,
};

Textbox.defaultProps = {
  field: null,
  currentValue: '',
};

export default Textbox;
