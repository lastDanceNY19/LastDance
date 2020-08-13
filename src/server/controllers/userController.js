const db = require('../models/userModel');

const userController = {};

userController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  const registerQuery = `INSERT INTO "User"(username, password, num_apps, num_acceptances) VALUES ('$1', '$2', 0, 0);`;
  const values = [username, password];

  db.query(registerQuery, values, (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      console.log('User has successfully been created.');
      return next();
    };
  });
};

userController.login = (req, res, next) => {
  const { username, password } = req.body;
  const loginQuery = `SELECT * FROM "User" WHERE username='$1' AND password='$2';`;
  const values = [username, password];

  db.query(loginQuery, values, (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      // handle logic for successful login
      if (data.rows.length) {
        res.locals.auth = true;
        res.locals.userId = data.rows[0]['_id'];
        console.log('User has successfully been authenticated.');
      } else {
        res.locals.auth = false;
        res.locals.userId = null;
        console.log('There was an error in trying to sign in.');
      };
      return next();
    };
  });
};

userController.addEvent = (req, res, next) => {
  const { userId, event, company } = req.body;
  const addEventQuery = `SELECT steps FROM Pipeline WHERE user_id=$1;`;
  const values = [userId];

  db.query(addEventQuery, values, (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      const { steps } = data.rows[0];
      const events = JSON.parse(steps);

      events.push(event);

      const eventsStringified = JSON.stringify(events);

      const updateEventsQuery = `UPDATE Pipeline SET steps='$1' WHERE user_id=$2 AND company='$3';`;
      const updateEventsValues = [eventsStringified, userId, company];

      db.query(updateEventsQuery, updateEventsValue, (err, data) => {
        if (err) {
          throw new Error(err);
        } else {
          console.log('Event added successfully.');
          return next();
        };
      });
    };
  });
};

userController.addApplication = (req, res, next) => {
  const { userId, company } = req.body;
  const addApplicationQuery = `INSERT INTO Pipeline (user_id, company, active, steps) VALUES ($1, '$2', true, '[]');`;
  const values = [userId, company];

  db.query(addApplicationQuery, values, (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      console.log('Application has been added successfully.');
      return next();
    };
  });
};

module.exports = userController;