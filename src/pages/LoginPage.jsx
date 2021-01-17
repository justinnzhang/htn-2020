import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { motion } from 'framer-motion';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import AnimateParent from '../animation/AnimateParent';
import AnimateChild from '../animation/AnimateChild';

import './pages.css';
import InvisibleButton from '../components/InvisibleButton';

const LoginPage = () => {
  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleSubmit() {
    localStorage.setItem('names meetbetween', `${firstName} ${lastName}`);
    history.push('/room');
  }

  return (
    <Container>
      <AnimateParent>
        <Row className='mt-5'>
          <Col sm={12} md={5}>
            <div className='login-form'>
              <AnimateChild>
                <InvisibleButton
                  location='/'
                  direction='backward'
                  text='Back Home'
                />
              </AnimateChild>

              <AnimateChild>
                <h1 className='h3 mt-3'>
                  Welcome to{' '}
                  <span className='gradient-text-hero'>MeetBetween</span>
                </h1>
              </AnimateChild>
              <AnimateChild>
                <hr />
              </AnimateChild>

              <AnimateChild>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder=''
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                  />
                </Form.Group>
              </AnimateChild>

              <AnimateChild>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder=''
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                  />
                </Form.Group>
              </AnimateChild>
              <AnimateChild>
                <Button
                  block
                  onClick={() => handleSubmit()}
                  disabled={firstName.length === 0 || lastName.length === 0}
                >
                  Enter
                </Button>
              </AnimateChild>
            </div>
          </Col>
          <Col className='my-auto' sm={12} md={4}>
            <motion.div
              style={{
                background: 'black',
                padding: '2rem',
                borderRadius: '8px',
                color: 'white',
              }}
              animate={{
                translateY: [-8, 10, -8],
              }}
              transition={{
                duration: 3.4,
                loop: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              key='co-workers'
              className='text-center d-none d-md-block'
            >
              <p className='text-close h2'>X</p>
              <p className='text-close'>co-workers are here</p>
            </motion.div>
            <motion.div
              style={{
                background: 'black',
                padding: '2rem',
                borderRadius: '8px',
                color: 'white',
              }}
              key='co-workers sm screen'
              className='text-center d-md-none mt-3'
            >
              <p className='text-close h2'>X</p>
              <p className='text-close'>co-workers are here</p>
            </motion.div>
          </Col>
        </Row>
      </AnimateParent>
    </Container>
  );
};

export default LoginPage;
