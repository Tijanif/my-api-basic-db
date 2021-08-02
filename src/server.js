const express = require('express');
const morgan = require('morgan');

const app = express();

const productsRouter = require('./resources/products/router');

// Middleware
app.use(morgan('dev'));
app.use(express.json());
// Routes

app.use('/products', productsRouter);

app.get('*', (req, res) => {
  res.json({ msg: 'ok' });
});

// Run Server

app.listen(4000, () => {
  console.log('App is running on server 4000');
});
