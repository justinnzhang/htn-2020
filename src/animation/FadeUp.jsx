import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import { fadeUpParent } from '../animation/variants';

const FadeUp = ({ children }) => {
  const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeUpParent}
      initial='initial'
      animate={inView ? 'enter' : 'initial'}
    >
      <main>{children}</main>
    </motion.div>
  );
};

export default FadeUp;
