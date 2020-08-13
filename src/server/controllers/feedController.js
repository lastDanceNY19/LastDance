const db = require('../models/userModel');

const feedController = {};

feedController.getPipeline = (req, res, next) => {
  const { userId } = req.query;
  const retrievePipelineQuery = `SELECT company, active, steps FROM Pipeline WHERE user_id=$1;`;
  const values = [userId];

  db.query(retrievePipelineQuery, values, (err, data) => {
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
  const retrieveGroupsQuery = `SELECT "Group".name FROM "Group" LEFT JOIN User_Group ON _id=group_id WHERE user_id=$1;`;
  const values = [userId];

  db.query(retrieveGroupsQuery, values, (err, data) => {
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