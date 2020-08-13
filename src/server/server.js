const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');

// Import controllers
const userController = require('./controllers/userController');
const feedController = require('./controllers/feedController');
const groupController = require('./controllers/groupController');
const cookieController = require('./controllers/cookieController');

const app = express();
const PORT = 3000;

// Parse request bodies
app.use(express.json());

// Parse cookies
// app.use(cookieParser());

// Register user
app.post('/create_user', userController.createUser, (req, res) => {
  res.sendStatus(200);
});

// Authenticate user
app.post('/login', userController.login, (req, res) => {
  res.status(200).json({ "auth": res.locals.auth, "userId": res.locals.userId });
});

// Retrieve pipeline, remember to parse steps before use!
app.get('/get_pipeline', feedController.getPipeline, (req, res) => {
  res.status(200).json({ "pipeline": res.locals.pipeline });
});

// Retrieve group information
app.get('/get_groups', feedController.getGroups, (req, res) => {
  res.status(200).json({ "groups": res.locals.groups });
});

// Add event
app.post('/add_event', userController.addEvent, (req, res) => {
  res.sendStatus(200);
});

// Add application
app.post('/add_application', userController.addApplication, (req, res) => {
  res.sendStatus(200);
});

// Join group
app.post('/join_group', groupController.joinGroup, (req, res) => {
  res.sendStatus(200);
});

// Create new group
app.post('/create_group', groupController.createGroup, (req, res) => {
  res.sendStatus(200);
});

// Development
if (process.env.NODE_ENV = 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
  });
};

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`));