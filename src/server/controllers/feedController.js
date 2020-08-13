const db = require('../models/userModel');

const feedController = {};

feedController.getPipeline = (req, res, next) => {
  const { user_id } = req.query;
  const retrievePipelineQuery = `SELECT company, active, steps FROM Pipeline WHERE user_id=${parseInt(user_id)};`;

  db.query(retrievePipelineQuery, (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      res.locals.pipeline = data.rows;
      console.log('Pipeline has been successfully retrieved.');
      return next();
    };
  });
};

feedController.getGroups = (req, res, next) => {
  const { userId } = req.query;
  const retrieveGroupsQuery = `SELECT "Group".name FROM "Group" LEFT JOIN User_Group ON _id=group_id WHERE user_id=${userId};`;

  db.query(retrieveGroupsQuery, (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      res.locals.groups = data.rows;
      console.log('Groups have been retrieved successfully.');
      return next();
    };
  });
};

module.exports = feedController;