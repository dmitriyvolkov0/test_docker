const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/backend', (req, res) => {
  res.json({ message: '222222' });
});

app.get('/backend/api/test', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});