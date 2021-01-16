import React from 'react';
import PropTypes from 'prop-types';
import AnimateChild from '../../animation/AnimateChild';

import '../components.css';

const Card = ({ title, action, children }) => {
  return (
    <AnimateChild>
      <div className='card-item shadow mb-3'>
        <h3 className='h4'>{title}</h3>
        {children}
      </div>
    </AnimateChild>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  action: PropTypes.array,
};

Card.defaultProps = {
  title: 'Placeholder Title',
};

export default Card;
