import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hi am a trial server');
});

app.listen(3000, () => console.log('Running on http://localhost:3000'));
