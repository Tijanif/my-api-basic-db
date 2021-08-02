const express = require('express');

const productsRouter = express.Router();

productsRouter.get('/', (req, res) => {
  res.json({ products: 'More than you can buy!' });
});

productsRouter.get('/:id', (req, res) => {
  const id = req.params.id;

  res.json({ ID: `More than you can buy! ${id}` });
});

module.exports = productsRouter;
