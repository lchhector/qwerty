import React from 'react';
import PropTypes from 'prop-types';
import './listItem.scss';

const ListItem = ({ children }) => (
  <div className="mh-list-item">
    <span className="mh-list-item__style" />
    {children}
  </div>
);

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListItem;
