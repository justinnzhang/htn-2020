import React, { useEffect, useState } from 'react';
import { usePresence } from '@roomservice/react';

import { useHistory } from 'react-router-dom';

import './pages.css';

import { Row, Col, Image, Container, Modal, Button } from 'react-bootstrap';

import { IoInformationCircle } from 'react-icons/io5';

import VideoChat from '../components/VideoChat';

function SettingModal(props) {
  const history = useHistory();

  return (
    <Modal
      {...props}
      size='sm'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button
          block
          variant='danger'
          onClick={() => {
            history.push('/');
          }}>
          Logout
        </Button>
      </Modal.Body>
    </Modal>
  );
}

function EnterRoom(props) {
  return (
    <Modal
      {...props}
      size='sm'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          {props.roomName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button
          block
          variant='secondary'
          onClick={() => {
            props.setVisible(true);
            props.setEntered(false);
          }}>
          Join Call
        </Button>
      </Modal.Body>
    </Modal>
  );
}

function VideoWrapper({ visible, setVisible, setEntered }) {
  return (
    <>
      {visible && (
        <div className='notification-container shadow'>
          <h3>Room 1</h3>
          <VideoChat />
          <Button
            onClick={() => {
              setVisible(false);
              setEntered(false);
            }}>
            Leave Room
          </Button>
        </div>
      )}
    </>
  );
}

const RoomPage = ({ userID, color }) => {
  const [joined, joinedClient] = usePresence('myroom', 'joined');

  const [entered, setEntered] = useState(false);
  const [roomTitle, setRoomTitle] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [isOutsideCanvas, setIsOutsideCanvas] = useState(false);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onMouseMove(e) {
      const canvas = e.target.getBoundingClientRect();

      const windowWidth = parseInt(window.innerWidth);
      const windowHeight = parseInt(window.innerHeight);

      const maxWidth = windowWidth * 0.7;
      const offsetWidth = (windowWidth - maxWidth) / 2 + windowWidth * 0.2;
      const maxHeight = 500;
      const offsetHeight = (windowHeight - maxHeight) / 2;

      var x = 0;
      var y = 0;

      if (
        e.clientX > windowWidth - maxWidth - offsetWidth &&
        e.clientX < windowWidth - offsetWidth - 55 &&
        e.clientX > (windowWidth - maxWidth) / 2
      ) {
        x = e.clientX;
      } else if (e.clientX < (windowWidth - maxWidth) / 2) {
        x = (windowWidth - maxWidth) / 2;
      } else if (e.clientX > windowWidth - maxWidth - offsetWidth) {
        x = windowWidth - offsetWidth - 55;
      } else if (e.clientX < windowWidth - offsetWidth - 55) {
        x = windowWidth - maxWidth - offsetWidth;
      }

      if (
        e.clientY > windowHeight - maxHeight - offsetHeight &&
        e.clientY < windowHeight - offsetHeight - 90
      ) {
        y = e.clientY;
      } else if (e.clientY > windowHeight - maxHeight - offsetHeight) {
        y = windowHeight - offsetHeight - 90;
      } else if (e.clientY < windowHeight - offsetHeight - 90) {
        y = windowHeight - maxHeight - offsetHeight;
      }

      console.log({ windowWidth, windowHeight });
      console.log({ maxWidth, maxHeight });
      console.log({ offsetWidth, offsetHeight });
      console.log({ clientX: e.clientX, clientY: e.clientY });
      console.log({ actualX: x, actualY: y });

      if (!modalShow && !isOutsideCanvas && !entered && !visible) {
        joinedClient?.set({
          position: { x, y },
          color,
          name: localStorage.getItem('names meetbetween'),
        });
      }
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('contextmenu', (event) => event.preventDefault());
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('contextmenu', (event) =>
        event.preventDefault()
      );
    };
  }, [joinedClient, modalShow, isOutsideCanvas, entered, visible]);

  return (
    <div
      className='mainbody-wrapper'
      style={{
        width: '100%',
        height: '100vh',
      }}
      onContextMenu={() => {
        setModalShow(true);
        return false;
      }}>
      <VideoWrapper
        visible={visible}
        setVisible={setVisible}
        setEntered={setEntered}
      />
      <SettingModal show={modalShow} onHide={() => setModalShow(false)} />
      {!modalShow && (
        <EnterRoom
          show={entered}
          onHide={() => setEntered(false)}
          setVisible={setVisible}
          setEntered={setEntered}
          roomName={roomTitle}
        />
      )}
      <div className='ui-card shadow top-left'>
        <p className='text-close'>
          <IoInformationCircle /> Tip: Right click to open the settings menu!
        </p>
      </div>
      <div className='ui-card shadow top-right'>
        <h1 className='h4 text-close gradient-text-hero'>MeetBetween Demo</h1>
      </div>
      <div className='ui-card shadow bottom-right'>
        <p className='text-close'>
          There are {Object.values(joined).length} co-workers online
        </p>
      </div>
      <div className='ui-card shadow bottom-left'>
        <Row>
          <Col>
            <Image src='https://picsum.photos/100/100' roundedCircle fluid />
          </Col>
          <Col className='my-auto'>
            <p className='text-close font-weight-medium'>
              {localStorage.getItem('names meetbetween')}
            </p>
          </Col>
        </Row>
      </div>
      <div className='canvas-wrapper'>
        <div
          id='canvas'
          style={{
            width: '50%',
            height: '500px',
            background: '#f2f2f2',
            zIndex: '-100000',
            background:
              'url(https://doixzan7hf4ti.cloudfront.net/hack-the-north-assets/officeview.jpg)',
            backgroundSize: 'cover',
          }}
          onMouseOver={(_e) => setIsOutsideCanvas(true)}
          onMouseLeave={(_e) => setIsOutsideCanvas(false)}>
          {Object.values(joined)?.map((obj, idx) => {
            // console.log(obj);
            return (
              <div
                key={idx}
                style={{
                  top: obj.position?.y,
                  left: obj.position?.x,
                  position: 'absolute',
                  borderRadius: '50%',
                  transition: 'all 0.05s',
                  zIndex: '-1000',
                  maxHeight: '90px',
                }}>
                <div>
                  <p>{obj.name}</p>
                </div>
                <div
                  style={{ width: 50, height: 50, background: `#${obj.color}` }}
                />
              </div>
            );
          })}
        </div>
        <div className='meeting-room-wrapper'>
          <div
            className='meeting-room-1'
            onMouseOver={(_e) => {
              setEntered(true);
              setRoomTitle('Enter Kitchen');
            }}>
            <div style={{ backgroundColor: 'black' }}>Kitchen</div>
          </div>
          <div
            className='meeting-room-2'
            onMouseOver={(_e) => {
              // setEntered(true);
              setRoomTitle('Enter Meeting Room 1');
            }}>
            Meeting Room 1
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
