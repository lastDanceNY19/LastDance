const db = require('../models/userModel');

const groupsController = {};

groupsController.createGroup = (req, res, next) => {
  const { group, userId } = req.body;
  const createGroupQuery = `INSERT INTO "Group" (name, admin) VALUES ('${group}', ${userId});`;

  db.query(createGroupQuery, (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      const addUserGroupQuery = `INSERT INTO User_Group (user_id, group_id) VALUES (${userId}, (SELECT _id FROM "Group" ORDER BY _id DESC LIMIT 1));`;

      db.query(addUserGroupQuery, (err, data) => {
        if (err) {
          throw new Error(err);
        } else {
          console.log('Group has successfully been created.');
          return next();
        };
      });
    };
  });
};

groupsController.joinGroup = (req, res, next) => {
  const { userId, groupId } = req.body;
  const joinGroupQuery = `INSERT INTO User_Group (user_id, group_id) VALUES (${userId}, ${groupId});`;

  db.query(joinGroupQuery, (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      console.log('Group has been joined.');
      return next();
    };
  });
};

module.exports = groupsController;