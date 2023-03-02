import React, { useState } from 'react';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SongList from './SongList';

function MusicPlayer() {
  const [songs, setSongs] = useState([
    { id: 1, title: 'Song 1', artist: 'Artist 1', url: 'song1.mp3' },
    { id: 2, title: 'Song 2', artist: 'Artist 2', url: 'song2.mp3' },
    { id: 3, title: 'Song 3', artist: 'Artist 3', url: 'song3.mp3' },
  ]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlay() {
    setIsPlaying(true);
  }

  function handlePause() {
    setIsPlaying(false);
  }

  return (
    <div>
      <h1>Music Player</h1>
      <SongList songs={songs} setCurrentSong={setCurrentSong} />
      {currentSong && (
        <div>
          <h2>{currentSong.title}</h2>
          <h3>{currentSong.artist}</h3>
          {isPlaying ? (
            <PauseButton handlePause={handlePause} />
          ) : (
            <PlayButton handlePlay={handlePlay} />
          )}
        </div>
      )}
    </div>
  );
}

export default MusicPlayer;