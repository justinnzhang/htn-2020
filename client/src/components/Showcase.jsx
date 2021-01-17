import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { Row, Col, Image } from 'react-bootstrap';

import './components.css';

import AnimateChild from '../animation/AnimateChild';

const options = [
  {
    title: 'Engaging Virtual Space',
    description:
      'Users engaging on our platform utilize cursors that act like real-time characters, allowing them to interact with each other in real time',
  },
  {
    title: 'Real Time Meeting Rooms',
    description:
      'Mimicking real office rooms in buildings, users would be able to move in and out of rooms just like an in-person interaction, and enjoying the ability to schedule meetings seamlessly in both the personal and professional setting',
  },
  {
    title: 'Bridging The Virtual Gap',
    description:
      'Using the platform, employees in-person can interact with remote employees and vice versa in dedicated bridging zones',
  },
];

const display = [
  {
    id: 'Key 1',
    content: (
      <Image
        src='https://doixzan7hf4ti.cloudfront.net/hack-the-north-assets/full-room.png'
        alt='picture of office'
        fluid
      />
    ),
  },
  {
    id: 'Key 2',
    content: (
      <Image
        src='https://doixzan7hf4ti.cloudfront.net/hack-the-north-assets/video-chat.png'
        alt='picture of people in video chat'
        fluid
      />
    ),
  },
  {
    id: 'Key 3',
    content: (
      <Image
        src='https://doixzan7hf4ti.cloudfront.net/hack-the-north-assets/last-img2.png'
        alt='illustrations + video chat'
        fluid
      />
    ),
  },
];

const SlideShow = ({ content, id }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div style={{ overflow: 'hidden' }}>
        <motion.div
          key={id}
          initial={{ opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          {content}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const Showcase = () => {
  const [choice, setChoice] = useState(0);

  return (
    <Row>
      <Col lg={{ order: 12 }} className='my-auto'>
        <div className='text-center'>
          {options.map((element, index) => (
            <AnimateChild key={`Showcase choice - ${index}`}>
              <div className='showcase-btn' onClick={() => setChoice(index)}>
                <h4
                  className={`h5 ${
                    index === choice ? 'gradient-text-hero' : ''
                  }`}
                >
                  {element.title}
                </h4>
                {index === choice && (
                  <p className='text-muted text-close d-none d-lg-block'>
                    {element.description}
                  </p>
                )}
              </div>
            </AnimateChild>
          ))}
        </div>
      </Col>
      <Col sm={12} md={7}>
        <SlideShow content={display[choice].content} id={display[choice].id} />
      </Col>
    </Row>
  );
};

export default Showcase;
