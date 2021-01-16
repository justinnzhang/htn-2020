import React from 'react';

import '../App.css';
import './pages.css';

import { Container, Row, Col, Image } from 'react-bootstrap';

// Animation
import AnimateChild from '../animation/AnimateChild';
import AnimateParent from '../animation/AnimateParent';

// Custom
import InvisibleButton from '../components/InvisibleButton';
import Card from '../components/layout/Card';
import Emoji from '../components/Emoji';

// Icons
import { IoLogoGithub } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import Footer from '../components/layout/Footer';
import Showcase from '../components/Showcase';

const LandingPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col className='banner-callout shadow-sm'>
          <h1 className='text-close text-muted h6'>
            <Emoji symbol='🎉' label='party popper' /> Created for Hack The
            North 2020++{' '}
            <a
              href='https://github.com/madebyjustinzhang/htn-2021'
              target='_blank'
              rel='noreferrer'
            >
              <IconContext.Provider
                value={{ style: { verticalAlign: 'middle' } }}
              >
                <IoLogoGithub />
              </IconContext.Provider>
            </a>{' '}
          </h1>
        </Col>
      </Row>

      <AnimateParent>
        <Row className='hero-cover'>
          <Col>
            <Container className='mt-5'>
              <Row>
                <Col className='my-auto' sm={12} md={4}>
                  <AnimateChild>
                    <h1 className='gradient-text-hero'>MeetBetween</h1>
                  </AnimateChild>
                  <AnimateChild>
                    <p className='lead'>Where hybrid work lives</p>
                  </AnimateChild>
                  <AnimateChild>
                    <InvisibleButton text='Get Started' />
                  </AnimateChild>
                </Col>
                <Col style={{ minHeight: '70vh' }}></Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </AnimateParent>

      <AnimateParent>
        <Row style={{ background: '#f2f2f2' }}>
          <Col>
            <Container className='pt-5 pb-5'>
              <Row>
                <Col>
                  <AnimateChild>
                    <h2 className='h3'>Hybrid?</h2>
                  </AnimateChild>
                </Col>
              </Row>

              <Row className='mb-3'>
                <Col>
                  <AnimateChild>
                    <p className='lead'>
                      The future of work isn't fully virtual or in-person, its{' '}
                      <span className='gradient-text-hero font-weight-bold'>
                        hybrid
                      </span>
                    </p>
                  </AnimateChild>
                </Col>
              </Row>

              <Row>
                <Col sm={12} md={4}>
                  <Card title='Virtual Preferences'>
                    <p>
                      <a
                        href='https://www.flexjobs.com/blog/post/survey-productivity-balance-improve-during-pandemic-remote-work/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Around 95% of people
                      </a>{' '}
                      have expressed that they want some sort of remote work.
                    </p>
                  </Card>
                </Col>

                <Col sm={12} md={4}>
                  <Card title='Flexibility is Key'>
                    <p>
                      Employees want freedom of choice and the ability to choose
                      where they work
                    </p>
                  </Card>
                </Col>

                <Col sm={12} md={4}>
                  <Card title='Existing Spaces'>
                    <p>
                      As companies begin to re-evaluate their locations, it's
                      important to see how they can be re-purposed for when a
                      virtual meeting just doesn't work
                    </p>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </AnimateParent>

      <AnimateParent>
        <Row className='pt-5 pb-5'>
          <Col>
            <Container>
              <Row>
                <Col sm={12} md={4} className='my-auto'>
                  <AnimateChild type='left'>
                    <p className='font-weight-bold text-close gradient-text-hero'>
                      INTRODUCING
                    </p>
                  </AnimateChild>
                  <AnimateChild type='left'>
                    <h2>MeetBetween</h2>
                  </AnimateChild>
                  <AnimateChild type='left'>
                    <p className='lead'>
                      The online workplace environment that blends both the
                      virtual office and physical office together, giving your
                      employees the flexibility of choice
                    </p>
                  </AnimateChild>
                </Col>
                <Col>
                  <AnimateChild>
                    <Image
                      src='https://doixzan7hf4ti.cloudfront.net/hack-the-north-assets/computerscreen-v2.svg'
                      fluid
                    />
                  </AnimateChild>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </AnimateParent>

      <AnimateParent>
        <Row className='pt-2 pb-5'>
          <Col>
            <Container>
              <Row className='text-center mb-3'>
                <Col>
                  <AnimateChild type='up'>
                    <h2 className='gradient-text-hero'>Features</h2>
                  </AnimateChild>
                </Col>
              </Row>
              <AnimateChild>
                <Showcase />
              </AnimateChild>
            </Container>
          </Col>
        </Row>
      </AnimateParent>

      <AnimateParent>
        <Row className='mt-5 pt-5 pb-5 mb-5'>
          <Col>
            <Container>
              <Row>
                <Col lg={{ order: 12 }} className='my-auto'>
                  <AnimateChild type='left'>
                    <h2>Ready To Try It Out?</h2>
                  </AnimateChild>
                  <AnimateChild type='left'>
                    <p className='lead'>Hop into our live demo below!</p>
                  </AnimateChild>
                  <AnimateChild type='left'>
                    <InvisibleButton text='Get Started' />
                  </AnimateChild>
                </Col>
                <Col sm={12} md={8}>
                  <AnimateChild>
                    <Image
                      src='https://doixzan7hf4ti.cloudfront.net/hack-the-north-assets/bottom-image.svg'
                      fluid
                    />
                  </AnimateChild>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </AnimateParent>

      <Footer />
    </Container>
  );
};

export default LandingPage;
