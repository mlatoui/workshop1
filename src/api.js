const express = require('express');
const app = express();
const { Profiles } = require('./Profiles');

app.get('/api/profiles', (req, res) => {
  res.json(Profiles);
});

app.listen(3001, () => {
  console.log('API server is running on port 3001');
});
