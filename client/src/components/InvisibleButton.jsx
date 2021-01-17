import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import './components.css';

import { IoArrowForwardOutline, IoArrowBackOutline } from 'react-icons/io5';

const InvisibleButton = ({ text, location, direction }) => {
  switch (direction) {
    case 'forward':
      return (
        <div className='invisible-btn font-weight-medium'>
          <Link to={location}>
            {text}{' '}
            <div className='arrow-btn'>
              <IoArrowForwardOutline />
            </div>
          </Link>
        </div>
      );
    case 'backward':
      return (
        <div className='invisible-btn font-weight-medium'>
          <Link to={location}>
            <div className='arrow-btn'>
              <IoArrowBackOutline />
            </div>{' '}
            {text}
          </Link>
        </div>
      );
    default:
      return (
        <div className='invisible-btn font-weight-medium'>
          <Link to={location}>
            {text}{' '}
            <div className='arrow-btn'>
              <IoArrowForwardOutline />
            </div>
          </Link>
        </div>
      );
  }
};

InvisibleButton.propTypes = {
  text: PropTypes.string,
  location: PropTypes.string,
  direction: PropTypes.string,
};

InvisibleButton.defaultProps = {
  text: 'Placeholder Text',
  location: '/',
  direction: 'forward',
};

export default InvisibleButton;
