import React, { useEffect, useState } from 'react';
import { usePresence } from '@roomservice/react';

import './pages.css';

import { Row, Col, Image, Container } from 'react-bootstrap';

const RoomPage = ({ userID, color }) => {
  const [joined, joinedClient] = usePresence('myroom', 'joined');

  const [show, setShow] = useState(false);

  useEffect(() => {
    function onMouseMove(e) {
      const canvas = document.getElementById('canvas');
      const maxWidth = parseInt(canvas.style.width);
      const maxHeight = parseInt(canvas.style.height);

      var x = e.clientX > maxWidth ? maxWidth : e.clientX;
      var y = e.clientY > maxHeight ? maxHeight : e.clientY;
      joinedClient?.set({
        position: { x, y },
        color,
        name: localStorage.getItem('names meetbetween'),
      });
    }

    // var myDiv = document.getElementById('mydiv');
    document.addEventListener('mousemove', onMouseMove);
    return () => document.removeEventListener('mousemove', onMouseMove);
  }, [joinedClient]);

  return (
    <div
      onContextMenu={() => {
        alert('ye');
        return false;
      }}
    >
      <div className='ui-card shadow bottom-left'>
        <Row>
          <Col>
            <Image src='https://picsum.photos/100/100' roundedCircle fluid />
          </Col>
          <Col className='my-auto'>
            <p>{localStorage.getItem('names meetbetween')}</p>
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
