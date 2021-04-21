const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let data = {};

app.get('/', (req, res) => {
  res.status(200).send(data);
});

app.post('/data', (req, res) => {
  data = req.body;
  res.statues(201).send('Added.');
});

app.listen(PORT, () => console.log(`Up on ${PORT}`));








