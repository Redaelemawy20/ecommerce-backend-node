const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Product list');
});

router.get('/:id', (req, res) => {
  res.send(`Product details for product ID: ${req.params.id}`);
});

module.exports = router;
