const express = require('express');
const cors = require('cors');
const app = express();
const Profiles = require('./Profiles');

app.use(cors());

app.get('/api/profiles', (req, res) => {
  res.json(Profiles);
});

app.get('/api/profiles/:id', (req, res) => {
  const id = req.params.id;
  const profile = Profiles.find((profile) => profile.id === parseInt(id));

  if (profile) {
    res.json(profile);
  } else {
    res.status(404).json({ message: 'Profile not found' });
  }
});

app.listen(3001, () => {
  console.log('API server is running on port 3001');
});
