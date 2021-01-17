import React, { useEffect, useState } from 'react';
import { usePresence } from '@roomservice/react';

import { useHistory } from 'react-router-dom';

import './pages.css';

import { Row, Col, Image, Container, Modal, Button } from 'react-bootstrap';

import { IoInformationCircle } from 'react-icons/io5';

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
        <Button block variant='secondary'>
          Join Call
        </Button>
      </Modal.Body>
    </Modal>
  );
}

const RoomPage = ({ userID, color }) => {
  const [joined, joinedClient] = usePresence('myroom', 'joined');

  const [entered, setEntered] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    function onMouseMove(e) {
      const canvas = document.getElementById('canvas');
      const maxWidth = parseInt(canvas.style.width);
      const maxHeight = parseInt(canvas.style.height);

      var x = e.clientX > maxWidth ? maxWidth : e.clientX;
      var y = e.clientY > maxHeight ? maxHeight : e.clientY;

      if (e.clientX > maxWidth - 100 && y < 200) setEntered(true);

      joinedClient?.set({
        position: { x, y },
        color,
        name: localStorage.getItem('names meetbetween'),
      });
    }

    // var myDiv = document.getElementById('mydiv');
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('contextmenu', (event) => event.preventDefault());
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('contextmenu', (event) =>
        event.preventDefault()
      );
    };
  }, [joinedClient]);

  return (
    <div
      onContextMenu={() => {
        setModalShow(true);
        return false;
      }}
    >
      <SettingModal show={modalShow} onHide={() => setModalShow(false)} />
      <EnterRoom show={entered} onHide={() => setEntered(false)} />
      <div className='ui-card shadow top-left'>
        <p className='text-close'>
          <IoInformationCircle /> Tip: Right click to open the settings menu!
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
          width: '1000px',
          height: '1000px',
          position: 'relative',
          background: '#f2f2f2',
          zIndex: '-100000',
        }}
      >
        {Object.values(joined)?.map((obj) => {
          // console.log(obj);
          return (
            <div
              style={{
                top: obj.position?.y,
                left: obj.position?.x,
                position: 'absolute',
                borderRadius: '50%',
                transition: 'all 0.05s',
                zIndex: '-1000',
              }}
              key={obj.user_id}
            >
              <div className='text-nowrap text-center'>
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
