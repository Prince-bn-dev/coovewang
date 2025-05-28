// src/components/CameraLoader.jsx
import React from 'react';

const CameraLoader = () => {
  return (
    <div className="camera-loader">
      <div className="camera-body">
        <div className="lens" />
        <div className="flash" />
        <div className="shutter" />
      </div>
      <div className="button" />
    </div>
  );
};

export default CameraLoader;
