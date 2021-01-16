import React, { useEffect } from 'react';
import { useMap } from '@roomservice/react';

const RoomPage = () => {
  const [block, map] = useMap('htn-room', 'blockMap');

  useEffect(() => {
    function onMouseMove(e) {
      // console.log(`x: ${e.clientX} || y: ${e.clientY}`);
      map?.set('position', {
        x: e.clientX,
        y: e.clientY,
      });
    }
    var myDiv = document.getElementById('mydiv');
    myDiv.addEventListener('mousemove', onMouseMove);
    return () => myDiv.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div id='mydiv' style={{ width: '100vw', height: '100vh' }}>
      <div
        style={{
          top: block.position?.x,
          left: block.position?.y,
          position: 'absolute',
          width: 50,
          height: 50,
          background: 'red',
          transition: 'all 0.25s',
        }}
      />
    </div>
  );
};

export default RoomPage;
