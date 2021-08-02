const express = require('express');

const productsRouter = express.Router();

productsRouter.get('/', (req, res) => {
  res.json({ products: 'More than you can buy!' });
});

productsRouter.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json({ ID: `More than you can buy! ${id}` });
});

productsRouter.post('/', (req, res) => {
  const newProduct = req.body;

  // create a new product

  res.json({ product: newProduct });
});

module.exports = productsRouter;
