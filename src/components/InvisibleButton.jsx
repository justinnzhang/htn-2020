import React from 'react';
import { motion } from 'framer-motion';

import PropTypes from 'prop-types';

import './components.css';

const InvisibleButton = ({ text }) => {
  return (
    <div className='invisible-btn'>
      {text} <div className='arrow-btn'>BEE</div>
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
