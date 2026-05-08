const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/songs', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f'
    },
    {
      id: 2,
      title: 'Levitating',
      artist: 'Dua Lipa',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d'
    }
  ]);
});

app.listen(5000, () => {
  console.log('Backend running on port 5000');
});
