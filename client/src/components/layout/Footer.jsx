import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import '../components.css';

const Footer = () => {
  return (
    <Row className='pt-5 pb-5' style={{ background: '#EDE2FF' }}>
      <Col>
        <Container>
          <Row>
            <Col sm={6} md={4}>
              <h2 className='h5 gradient-text-hero text-close'>MeetBetween</h2>
              <p className='text-muted'>Made for Hack North 2020++</p>
              <ul className='list-unstyled'>
                <li>Justin Zhang</li>
                <li>Jerry Iu</li>
                <li>Jason Zhu</li>
                <li>Alyssa Yan</li>
              </ul>
            </Col>
            <Col>
              <h2 className='h5 text-close'>About</h2>
              <p>Simple demo for </p>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default Footer;
