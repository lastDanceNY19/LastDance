const db = require('../models/userModel');

const feedController = {};

feedController.getPipeline = (req, res, next) => {
  const retrievePipelineQuery = ``;

  db.query(retrievePipelineQuery, (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      // add logic for handling retrieving user pipeline
      console.log('Pipeline has been successfully retrieved.');
      return next();
    };
  });
};

feedController.getGroups = (req, res, next) => {
  const retrieveGroupsQuery = ``;

  db.query(retrieveGroupsQuery, (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      // add logic for handling retrieving user groups
      console.log('Groups have been retrieved successfully.');
      return next();
    };
  });
};

module.exports(feedController);