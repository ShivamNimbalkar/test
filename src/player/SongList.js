import React from 'react';

function SongList({ songs, setCurrentSong }) {
  function handleSongClick(song) {
    setCurrentSong(song);
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