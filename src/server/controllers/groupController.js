const db = require('../models/userModel');

const groupsController = {};

groupsController.createGroup = (req, res, next) => {
  const createGroupQuery = ``;

  db.query(createGroupQuery, (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      // add logic for handling create new group
      console.log('New group has been created.');
      return next();
    };
  });
};

groupsController.joinGroup = (req, res, next) => {
  const joinGroupQuery = ``;

  db.query(joinGroupQuery, (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      // add logic for handling joining group
      console.log('Group has been joined.');
      return next();
    };
  });
};

module.exports(groupsController);