const express = require('express');
const app = express();
const port = 3065;

app.get('/', (req, res) => {
  res.status(200).send('hello node server');
});

app.listen(port, () => {
  console.log(port, 'port start');
});
