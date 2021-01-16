import React from 'react';
import { motion } from 'framer-motion';

import { Container, Row, Col, Button } from 'react-bootstrap';

import FadeUp from '../animation/FadeUp';

import { fadeUpChild } from '../animation/variants';

const LandingPage = () => {
  return (
    <Container className='mt-5'>
      <Row>
        <Col>
          <h2>MeetBetween</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <FadeUp>
            <motion.p variants={fadeUpChild}>
              Creating the hybrid office of the future
            </motion.p>
            <motion.p variants={fadeUpChild}>wtf</motion.p>
          </FadeUp>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
