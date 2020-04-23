'use strict';

const express = require('express');

// Constants
const PORT = 3001;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.json(['product1', 'product2', 'product3']);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);