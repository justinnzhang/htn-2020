import React from 'react';
import { motion } from 'framer-motion';

import { fadeUpChild } from './variants';

const FadeUpChild = ({ children }) => {
  return <motion.div variants={fadeUpChild}>{children}</motion.div>;
};

export default FadeUpChild;
