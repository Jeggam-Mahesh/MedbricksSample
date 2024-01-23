import React, { useState } from 'react';
import './CSS/CubePresentation.css'; // Import your CSS file for styling

const CubePresentation = () => {
  const [rotation, setRotation] = useState(0);

  const handleRotation = () => {
    setRotation(rotation + 90);
  };

  return (
    <div className="cube-container">
      <div
        className="cube"
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        <div className="face front">Front</div>
        <div className="face back">Back</div>
        <div className="face left">Left</div>
        <div className="face right">Right</div>
        <div className="face top">Top</div>
        <div className="face bottom">Bottom</div>
      </div>
    
    </div>
  );
};

export default CubePresentation;
