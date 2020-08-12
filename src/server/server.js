const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const userController = require('./controllers/userController');
const feedController = require('./controllers/feedController');
const groupController = require('./controllers/groupController');
const cookieController = require('./controllers/cookieController');

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
});

// Retrieve group information
app.get('/get_groups', feedController.getGroups, (req, res) => {
  // send group information
});

// Add event
app.post('/add_event', userController.addEvent, (req, res) => {
  // post event
});

// Add application
app.post('/add_application', userController.addApplication, (req, res) => {
  // add app
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