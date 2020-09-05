import React from 'react';
import PropTypes from 'prop-types';
import Trait from '../trait';
import './jobPostingsItem.scss';

const PostingsItem = ({
  value,
  currentValue,
  onPress,
  item,
}) => {
  let selected = false;
  if (currentValue === value) {
    selected = true;
  } else selected = false;
  const {
    companyInfo,
    role,
    employmentType,
    pay,
    top3Traits,
  } = item;
  return (
    <button
      type="button"
      className={(selected) ? 'mh-job-postings mh-job-postings--active' : 'mh-job-postings'}
      onClick={() => onPress(value)}
    >
      <div className="mh-job-postings__header">
        <img src={companyInfo.companyLogo} alt="img" className="mh-job-postings__header__company-logo" />
        <div className="mh-job-postings__header__text">
          <div className="mh-job-postings__header__text--role">{role}</div>
          <div className="mh-job-postings__header__text--company-name">{companyInfo.companyName}</div>
        </div>
      </div>
      <div className="mh-job-postings__content">
        <div className="mh-job-postings__content--light-text">{companyInfo.location}, {companyInfo.country}</div>
        <div className="mh-job-postings__content__employment-type-and-pay">
          <span>
            {employmentType.map((type, index) => (
              <span>{type}{index < employmentType.length - 1 ? ', ' : ''}</span>
            ))}
          </span>
          <span>${pay}/mth</span>
        </div>
      </div>
      <div className="mh-job-postings__desired-traits">
        {top3Traits.map((trait) => (
          <Trait trait={trait.trait} />
        ))}
      </div>
    </button>
  );
};

PostingsItem.propTypes = {
  value: PropTypes.string.isRequired,
  currentValue: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  item: PropTypes.shape({
    companyInfo: PropTypes.shape({
      companyLogo: PropTypes.string,
      companyName: PropTypes.string,
      location: PropTypes.string,
      country: PropTypes.string,
    }),
    role: PropTypes.string,
    employmentType: PropTypes.arrayOf({}),
    pay: PropTypes.string,
    top3Traits: PropTypes.shape({
      trait: PropTypes.string,
      description: PropTypes.string,
      map: PropTypes.func,
    }),
  }).isRequired,
};

export default PostingsItem;
