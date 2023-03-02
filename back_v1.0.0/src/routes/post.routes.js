const express = require('express');
const router = express.Router();

router.post('/', () => {
  // todo
});

router.get('/', (req, res) => {
  return res.send('start router');
});

router.patch('/', () => {
  // todo
});

router.delete('/', () => {
  // todo
});

module.exports = router;
