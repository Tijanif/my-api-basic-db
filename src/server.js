const express = require('express');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(morgan('dev'));

// Routes

app.get('*', (req, res) => {
  res.json({ msg: 'ok' });
});

// Run Server

app.listen(4000, () => {
  console.log('App is running on server 4000');
});
