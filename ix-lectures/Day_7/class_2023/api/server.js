const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/posts', (req, res) => {
  res.send({
    name: 'Cameron',
    surname: 'Kirkpatrick',
    age: 29,
    career: 'Software Engineer',
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
