const db = require('../models/userModel');

const userController = {};

userController.createUser = (req, res, next) => {
  const userInfo = req.body;
  const registerQuery = ``;

  db.query(registerQuery, (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      console.log('User has successfully been created.');
      return next();
    };
  });
};

userController.login = (req, res, next) => {
  const userInfo = req.body;
  const loginQuery = ``;

  db.query(loginQuery, (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      // handle logic for successful login
      console.log('User has successfully been authenticated.');
      return next();
    };
  });
};

userController.addEvent = (req, res, next) => {
  const addEventQuery = ``;

  db.query(addEventQuery, (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      // handle logic for successfully creating a new event
      console.log('Event added successfully.');
      return next();
    };
  });
};

userController.addApplication = (req, res, next) => {
  const addApplicationQuery = ``;

  db.query(addApplicationQuery, (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      // handle logic for adding application here
      console.log('Application has been added successfully.');
      return next();
    };
  });
};

module.exports = userController;