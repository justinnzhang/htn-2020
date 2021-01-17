import React from 'react';
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';

import { Button, Row, Col } from 'react-bootstrap';

export default class VideoChat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      connection: 'Connecting',
      publishVideo: true,
      sessionData: null,
    };

    this.sessionEventHandlers = {
      sessionConnected: () => {
        this.setState({ connection: 'Connected' });
      },
      sessionDisconnected: () => {
        this.setState({ connection: 'Disconnected' });
      },
      sessionReconnected: () => {
        this.setState({ connection: 'Reconnected' });
      },
      sessionReconnecting: () => {
        this.setState({ connection: 'Reconnecting' });
      },
    };

    this.publisherEventHandlers = {
      accessDenied: () => {
        console.log('User denied access to media source');
      },
      streamCreated: () => {
        console.log('Publisher stream created');
      },
      streamDestroyed: ({ reason }) => {
        console.log(`Publisher stream destroyed because: ${reason}`);
      },
    };

    this.subscriberEventHandlers = {
      videoEnabled: () => {
        console.log('Subscriber video enabled');
      },
      videoDisabled: () => {
        console.log('Subscriber video disabled');
      },
    };
  }

  onSessionError = (error) => {
    this.setState({ error });
  };

  onPublish = () => {
    console.log('Publish Success');
  };

  onPublishError = (error) => {
    this.setState({ error });
  };

  onSubscribe = () => {
    console.log('Subscribe Success');
  };

  onSubscribeError = (error) => {
    this.setState({ error });
  };

  toggleVideo = () => {
    this.setState((state) => ({
      publishVideo: !state.publishVideo,
    }));
  };

  componentWillMount() {
    fetch('/api/token')
      .then((data) => data.json())
      .then((data) => {
        this.setState({ sessionData: data });
      })
      .catch((err) => {
        console.error('Failed to get session credentials', err);
        alert(
          'Failed to get opentok sessionId and token. Make sure you have updated the config.js file.'
        );
      });
  }

  render() {
    const { error, connection, publishVideo } = this.state;
    // const { apiKey, sessionId, token } = this.state;
    if (this.state.sessionData === null) {
      return <div>Loading...</div>;
    } else {
      return (
        // console.log(this.state.sessionData.apiKey, this.state.sessionData.sessionId, this.state.sessionData.token);
        <Row>
          <Col>
            <div id='sessionStatus'>
              <p
                style={{
                  color: connection === 'Connected' ? 'green' : 'black',
                }}>
                Session Status: {connection}
              </p>
            </div>
            {/* {error ? (
            <div className='error'>
            <strong>Error:</strong> {error}
            </div>
          ) : null} */}
            <OTSession
              apiKey={this.state.sessionData.apiKey}
              sessionId={this.state.sessionData.sessionId}
              token={this.state.sessionData.token}
              onError={this.onSessionError}
              eventHandlers={this.sessionEventHandlers}>
              <Button
                id='videoButton'
                onClick={this.toggleVideo}
                variant='dark'>
                {publishVideo ? 'Disable' : 'Enable'} Video
              </Button>
              <Row className='mt-2 mb-2'>
                <Col className='my-auto text-center'>
                  <OTPublisher
                    properties={{ publishVideo, width: '100%', height: 300 }}
                    onPublish={this.onPublish}
                    onError={this.onPublishError}
                    eventHandlers={this.publisherEventHandlers}
                  />
                  <p className='font-weight-bold'>You</p>
                </Col>
                <OTStreams>
                  <Col>
                    <OTSubscriber
                      properties={{ width: 300, height: 200 }}
                      onSubscribe={this.onSubscribe}
                      onError={this.onSubscribeError}
                      eventHandlers={this.subscriberEventHandlers}
                    />
                  </Col>
                </OTStreams>
              </Row>
            </OTSession>
          </Col>
        </Row>
      );
    }
  }
}
