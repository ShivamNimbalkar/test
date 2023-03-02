// PlayButton.js
import React from 'react';

function PlayButton({ handlePlay }) {
  return <button onClick={handlePlay}>Play</button>;
}

export default PlayButton;