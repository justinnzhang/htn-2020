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
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button
          block
          variant='danger'
          onClick={() => {
            history.push('/');
          }}
        >
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
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Enter Room 1
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button
          block
          variant='secondary'
          onClick={() => {
            props.setVisible(true);
            props.setEntered(false);
          }}
        >
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
          <VideoChat />
          <Button
            onClick={() => {
              setVisible(false);
              setEntered(false);
            }}
          >
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
  const [modalShow, setModalShow] = useState(false);
  const [isOutsideCanvas, setIsOutsideCanvas] = useState(false);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onMouseMove(e) {
      const canvas = e.target.getBoundingClientRect();

      const windowWidth = parseInt(canvas.width);
      const windowHeight = parseInt(canvas.height);

      const maxWidth = windowWidth * 0.7;
      const offsetWidth = (windowWidth - maxWidth) / 2;
      const maxHeight = 500;
      const offsetHeight = (windowHeight - maxHeight) / 2;

      var x =
        e.clientX > windowWidth - maxWidth - offsetWidth
          ? e.clientX
          : windowWidth - maxWidth - offsetWidth;
      // var x = e.clientX;
      var y =
        e.clientY > windowHeight - maxHeight - offsetHeight
          ? e.clientY
          : windowHeight - maxHeight - offsetHeight;
      // var y = e.clientY;
      console.log({ windowWidth, windowHeight });
      console.log({ maxWidth, maxHeight });
      console.log({ offsetWidth, offsetHeight });
      console.log({ clientX: e.clientX, clientY: e.clientY });
      console.log({ actualX: x, actualY: y });
      if (e.clientX > maxWidth - 100 && y > maxHeight && !modalShow && !visible)
        setEntered(true);

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
        display: 'flex',
      }}
      onContextMenu={() => {
        setModalShow(true);
        return false;
      }}
    >
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
        />
      )}
      <div className='ui-card shadow top-left'>
        <p className='text-close'>
          <IoInformationCircle /> Tip: Right click to open the settings menu!
        </p>
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
      <div
        id='canvas'
        style={{
          width: '70%',
          height: '500px',
          background: '#f2f2f2',
          zIndex: '-100000',
        }}
        onMouseOver={(_e) => setIsOutsideCanvas(true)}
        onMouseLeave={(_e) => setIsOutsideCanvas(false)}
      >
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
              }}
            >
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
    </div>
  );
};

export default RoomPage;
