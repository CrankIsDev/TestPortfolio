import React from 'react';

const Transition = () => {
  return (
    <>
      <div className="transition">
        <div className="right">
          <div className="transition-right"></div>
        </div>
        <div className="topLeft">
          <div className="transition-topLeft"></div>
          <div className="transition-topLeft"></div>
          <div className="transition-topLeft"></div>
        </div>
      </div>
    </>
  );
}

export default Transition;