const express = require('express');
const path1 = require('path');

const app = express();
const PORT = 3000;

// Development
if (process.env.NODE_ENV = 'production') {
  app.use('/build', express.static(path1.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.sendFile(path1.join(__dirname, '../build/index.html'));
  });
};

app.listen(PORT, () => console.log('itworks'));