import React, { useState, useEffect, useRef } from "react";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import SongList from "./SongList";
// import song1 from 'songs/song1.mp3'
// import song2 from 'songs/song2.mp3'
// import song3 from 'songs/song3.mp3'
function MusicPlayer() {
  const [songs, setSongs] = useState([
    { id: 1, title: "Song1", artist: "Artist 1", url: "/songs/song1.mp3" },
    { id: 2, title: "Song2", artist: "Artist 2", url: "/songs/song2.mp3" },
    { id: 3, title: "Song3", artist: "Artist 3", url: "/songs/song3.mp3" },
  ]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioElement = useRef(null);

  function handlePlay() {
    setIsPlaying(true);
    audioElement.current.play();
  }

  function handlePause() {
    setIsPlaying(false);
    audioElement.current.pause();
  }

  return (
    <div>
      <h1>Music Player</h1>
      <SongList songs={songs} setCurrentSong={setCurrentSong} />
      {currentSong && (
        <div>
          <audio src={currentSong.url} ref={audioElement}></audio>
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
