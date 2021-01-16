import React from 'react';

import '../App.css';
import './pages.css';

import { Container, Row, Col, Button, Image } from 'react-bootstrap';

import FadeUp from '../animation/FadeUp';
import FadeUpChild from '../animation/FadeUpChild';

import InvisibleButton from '../components/InvisibleButton';

import HeroImage from '../assets/hero1.svg';

const LandingPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col className='banner-callout shadow-sm'>
          <p className='text-close text-muted h6'>
            Created for Hack The North 2020++
          </p>
        </Col>
      </Row>
      <Row style={{ background: '#f2f2f2' }}>
        <Col>
          <Container className='mt-5'>
            <FadeUp>
              <Row>
                <Col className='my-auto'>
                  <h2 className='gradient-text'>MeetBetween</h2>
                  <FadeUpChild>
                    <p>The home of hybrid work</p>
                  </FadeUpChild>
                  <FadeUpChild>
                    <InvisibleButton text='Get Started' />
                  </FadeUpChild>
                </Col>
                <Col>
                  <FadeUpChild>
                    <Image src={HeroImage} fluid className='p-5' />
                  </FadeUpChild>
                </Col>
              </Row>
            </FadeUp>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
