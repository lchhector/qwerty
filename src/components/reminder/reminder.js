import React from 'react';
import PropTypes from 'prop-types';
import TelegramIcon from '@material-ui/icons/Telegram';
import ScheduleIcon from '@material-ui/icons/Schedule';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './reminder.scss';

const Reminder = ({ applicant }) => {
  const { status, application } = applicant;

  const renderReminder = (applicationStatus) => {
    // if (status === 'pending') {
    //   // do smth
    // }
    if (applicationStatus === 'shortlisted') {
      return (
        <div className="mh-reminder__container">
          <ScheduleIcon style={{ fontSize: '24px' }} className="mh-reminder__icon" />
          <div className="mh-reminder__headings">
            <div className="mh-reminder__headings__heading">{`Interview with ${application.name} for ${application.applicationFor}`}</div>
            <div className="mh-reminder__headings__subheading">{`${applicant.interviewDate}`}</div>
          </div>
        </div>
      );
    }
    if (applicationStatus === 'interviewed') {
      return (
        <div className="mh-reminder__container">
          <TelegramIcon style={{ fontSize: '24px' }} className="mh-reminder__icon" />
          <div className="mh-reminder__headings">
            <div className="mh-reminder__headings__heading">{`Review ${application.name} for ${application.applicationFor}`}</div>
            <div className="mh-reminder__headings__subheading">{`Interview was on ${applicant.interviewDate}`}</div>
          </div>
        </div>
      );
    }
    // if (applicationStatus === 'accepted') {
    //   // do smth
    // }
    // if (applicationStatus === 'rejected') {
    //   // do smth
    // }
    return null;
  };

  const renderButtons = (applicationStatus) => {
    const setReminder = <button type="button" className="btn-set-reminder">Set Reminder&nbsp;<ArrowForwardIcon /></button>;
    const hireCandidate = <button type="button" className="btn-hire-candidate">Hire Candidate&nbsp;<CheckIcon /></button>;
    const rejectAndReview = <button type="button" className="btn-reject-and-review">Reject and Review&nbsp;<CloseIcon /></button>;
    const wait = <button type="button" className="btn-wait">Wait&nbsp;<ArrowForwardIcon /></button>;

    // if (applicationStatus === 'pending') {
    //   // do smth
    // }
    if (applicationStatus === 'shortlisted') {
      return (
        <span className="mh-reminder__buttons">
          {setReminder}
        </span>
      );
    }
    if (applicationStatus === 'interviewed') {
      return (
        <span className="mh-reminder__buttons">
          {hireCandidate}
          {rejectAndReview}
          {wait}
        </span>
      );
    }
    // if (applicationStatus === 'accepted') {
    //   // do smth
    // }
    // if (applicationStatus === 'rejected') {
    //   // do smth
    // }
    return null;
  };

  return (
    <div className="mh-reminder">
      <div>
        {renderReminder(status)}
      </div>
      <div>
        {renderButtons(status)}
      </div>
    </div>
  );
};

Reminder.propTypes = {
  applicant: PropTypes.shape({
    status: PropTypes.string,
    interviewDate: PropTypes.string,
    application: PropTypes.shape({
      name: PropTypes.string,
      applicationFor: PropTypes.string,
    }),
  }).isRequired,
};

export default Reminder;
