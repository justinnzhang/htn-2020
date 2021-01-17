import React, { useEffect } from 'react';
import { usePresence } from '@roomservice/react';

const RoomPage = ({ userID, color }) => {
  const [joined, joinedClient] = usePresence('myroom', 'joined');

  useEffect(() => {
    function onMouseMove(e) {
      const canvas = document.getElementById('canvas');
      const maxWidth = parseInt(canvas.style.width);
      const maxHeight = parseInt(canvas.style.height);

      var x = e.clientX > maxWidth ? maxWidth : e.clientX;
      var y = e.clientY > maxHeight ? maxHeight : e.clientY;
      joinedClient?.set({ position: { x, y }, color });
    }
    // var myDiv = document.getElementById('mydiv');
    document.addEventListener('mousemove', onMouseMove);
    return () => document.removeEventListener('mousemove', onMouseMove);
  }, [joinedClient]);

  return (
    <div
      id='canvas'
      style={{ width: '300px', height: '400px', position: 'relative' }}>
      {Object.values(joined)?.map((obj) => {
        console.log(obj);
        return (
          <div
            style={{
              top: obj.position?.y,
              left: obj.position?.x,
              position: 'absolute',
              width: 50,
              height: 50,
              background: `#${obj.color}`,
              transition: 'all 0.05s',
            }}
          />
        );
      })}
    </div>
  );
};

export default RoomPage;
