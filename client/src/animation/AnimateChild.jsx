import React from 'react';
import { motion } from 'framer-motion';

import PropTypes from 'prop-types';

import {
  fadeInChild,
  fadeLeftChild,
  fadeRightChild,
  fadeUpChild,
} from './variants';

const AnimateChild = ({ children, type }) => {
  switch (type) {
    case 'up':
      return <motion.div variants={fadeUpChild}>{children}</motion.div>;
    case 'left':
      return <motion.div variants={fadeLeftChild}>{children}</motion.div>;
    case 'right':
      return <motion.div variants={fadeRightChild}>{children}</motion.div>;
    case 'in':
      return <motion.div variants={fadeInChild}>{children}</motion.div>;
    default:
      return <motion.div variants={fadeUpChild}>{children}</motion.div>;
  }
};

AnimateChild.propTypes = {
  type: PropTypes.string,
};

AnimateChild.defaultProps = {
  type: 'up',
};

export default AnimateChild;
