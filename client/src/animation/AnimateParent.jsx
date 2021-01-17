import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import { animatedParent } from './variants';

const AnimateParent = ({ children }) => {
  const [ref, inView] = useInView({
    rootMargin: '-200px 0px',
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      variants={animatedParent}
      initial='initial'
      animate={inView ? 'enter' : 'initial'}
      exit='initial'
    >
      <main>{children}</main>
    </motion.div>
  );
};

export default AnimateParent;
