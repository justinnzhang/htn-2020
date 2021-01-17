export const fadeUpParent = {
  initial: {
    opacity: 0,
    y: 30,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.333,
      ease: [0.19, 0.7, 0.95, 1],
      staggerChildren: 0.1,
      when: 'beforeChildren',
    },
  },
};

export const animatedParent = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: [0.19, 0.7, 0.95, 1],
      staggerChildren: 0.1,
      when: 'beforeChildren',
    },
  },
};

export const fadeUpChild = {
  initial: {
    opacity: 0,
    translateY: 20,
  },
  enter: {
    opacity: 1,
    translateY: 0,
    transition: { duration: 0.3, ease: [0.19, 0.7, 0.95, 1] },
  },
};

export const fadeLeftChild = {
  initial: {
    opacity: 0,
    translateX: -20,
  },
  enter: {
    opacity: 1,
    translateX: 0,
    transition: { duration: 0.3, ease: [0.19, 0.7, 0.95, 1] },
  },
};

export const fadeRightChild = {
  initial: {
    opacity: 0,
    translateX: 20,
  },
  enter: {
    opacity: 1,
    translateX: 0,
    transition: { duration: 0.3, ease: [0.19, 0.7, 0.95, 1] },
  },
};

export const fadeInChild = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.3, ease: [0.19, 0.7, 0.95, 1] },
  },
};
