import React from 'react';

import PropTypes from 'prop-types';

import './components.css';

import { IoArrowForwardOutline } from 'react-icons/io5';

const InvisibleButton = ({ text }) => {
  return (
    <div className='invisible-btn font-weight-medium'>
      {text}{' '}
      <div className='arrow-btn'>
        <IoArrowForwardOutline />
      </div>
    </div>
  );
};

InvisibleButton.propTypes = {
  text: PropTypes.string,
};

InvisibleButton.defaultProps = {
  text: 'Placeholder Text',
};

export default InvisibleButton;
