import React from "react";

function SongList({ songs, setCurrentSong, setIsPlaying }) {
  function handleSongClick(song) {
    setCurrentSong(song);
    setIsPlaying(false);
  }

  return (
    <ul>
      {songs.map((song) => (
        <li key={song.id} onClick={() => handleSongClick(song)}>
          {song.title} - {song.artist}
        </li>
      ))}
    </ul>
  );
}

export default SongList;
