import React, { useEffect, useState } from 'react';
import './index.css';

export default function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/songs')
      .then((res) => res.json())
      .then((data) => setSongs(data));
  }, []);

  return (
    <div className="app">
      <aside className="sidebar">
        <h1>Spotify Clone</h1>
        <p>Home</p>
        <p>Search</p>
        <p>Your Library</p>
      </aside>

      <main className="content">
        <h2>Trending Songs</h2>
        <div className="songs">
          {songs.map((song) => (
            <div className="card" key={song.id}>
              <img src={song.image} alt={song.title} />
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
