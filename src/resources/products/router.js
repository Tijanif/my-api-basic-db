const express = require('express');

const productsRouter = express.Router();

productsRouter.get('/', (req, res) => {
  res.json({ products: 'More than you can buy!' });
});

module.exports = productsRouter;
