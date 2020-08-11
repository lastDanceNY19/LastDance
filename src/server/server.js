const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Development

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname,'../dist')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.post('/createUser', (req, res) => {
  res.sendStatus(200)
})

app.post('/login', (req, res) => {
  res.sendStatus(200)
})

app.post('/getPipeline', (req, res) => {
  res.sendStatus(200)
})


app.listen(PORT, () => console.log('itworks'));