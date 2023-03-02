const express = require('express');
const app = express();
const port = 3065;
// morgan
const morgan = require('morgan');
// CORS
const cors = require('cors');
// index router
const indexRouter = require('./src/routes');

app.get('/', (req, res) => {
  res.status(200).send('hello node server');
});

app.use(morgan('dev'));

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use('/', indexRouter);

app.listen(port, () => {
  console.log(port, 'port start');
});
