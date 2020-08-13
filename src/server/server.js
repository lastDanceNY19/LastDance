const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const userController = require('./controllers/userController');
const feedController = require('./controllers/feedController');
const groupController = require('./controllers/groupController');
const cookieController = require('./controllers/cookieController');

const fs = require('fs');

const app = express();
const PORT = 3000;

// Parse request bodies
app.use(express.json());

// Parse cookies
app.use(cookieParser());

// Register user
app.post('/create_user', userController.createUser, (req, res) => {
  // send stuff
});

// Authenticate user
app.post('/login', userController.login, (req, res) => {
  // authenticate
});

// Retrieve pipeline
app.get('/get_pipeline', feedController.getPipeline, (req, res) => {
  // send pipeline information
  let obj = [{
    company: 'Amazon',
    events: ['phone screen 7/15'],
    status: 'Accepted',
    id: 9000
  }];

  //  res.send(JSON.stringify(obj));
  return res.status(200).json(obj)
});

// Retrieve group information
app.get('/get_groups', feedController.getGroups, (req, res) => {
  // send group information
  let obj = [{
    name: 'NY19',
    users: ['Joe', 'Bob', 'Bill']
  }];
  return res.status(200).json(obj);
});

// Add event
app.post('/add_event', userController.addEvent, (req, res) => {
  // post event
});

// Add application
app.post('/add_application', userController.addApplication, (req, res) => {
  let file = fs.readFileSync(path.join(__dirname, 'db.json'));
  console.log("file is ", JSON.parse(file));
  let obj = JSON.parse(file);
  obj.applications.push({
    name: req.body.name,
    events: [],
    status: 'pending'
  });
  let str = JSON.stringify(obj);
  fs.writeFile(path.join(__dirname, 'db.json'), str, (error) => {
    if (error) console.log('error ', error);
  })
  res.send('wrote new app to db');
});

// Join group
app.post('/join_group', groupController.joinGroup, (req, res) => {
  // join group
});

// Create new group
app.post('/create_group', groupController.createGroup, (req, res) => {
  // create group
});

// Development
if (process.env.NODE_ENV = 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
  });
};

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`));