import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Accordion } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import './mhAccordion.scss';

const styles = {
  root: {
    borderRadius: '10px !important',
    padding: '2px 10px',
    boxShadow: 'none',
  },
};

const MhAccordion = (props) => {
  const {
    classes, children, className, ...other
  } = props;

  return (
    <Accordion className={clsx(classes.root, className)} {...other}>
      {children}
    </Accordion>
  );
};

MhAccordion.propTypes = {
  children: PropTypes.node,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

MhAccordion.defaultProps = {
  children: null,
  className: null,
};

export default withStyles(styles)(MhAccordion);
