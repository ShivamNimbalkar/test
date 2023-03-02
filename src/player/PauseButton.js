// PauseButton.js
import React from 'react';

function PauseButton({ handlePause }) {
  return <button onClick={handlePause}>Pause</button>;
}

export default PauseButton;