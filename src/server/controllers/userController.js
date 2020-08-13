const db = require('../models/userModel');

const userController = {};

userController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  const registerQuery = `INSERT INTO "User"(username, password, num_apps, num_acceptances) VALUES ('${username}', '${password}', 0, 0);)`;

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
  const { username, password } = req.body;
  const loginQuery = `SELECT * FROM "User" WHERE username='${username}' AND password='${password}';`;

  db.query(loginQuery, (err, data) => {
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
  /*
  Expect req.body to look like:
  {
    "userId": 1,
    "event": {
      "phoneScreen": "July 24, 2020"
    },
    "company": "Amazon"
  }
  */
  const { userId, event, company } = req.body;
  const addEventQuery = `SELECT steps FROM Pipeline WHERE user_id=${userId};`;

  db.query(addEventQuery, (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      const { steps } = data.rows[0];
      const events = JSON.parse(steps);

      events.push(event);

      const eventsStringified = JSON.stringify(events);

      const updateEventsQuery = `UPDATE Pipeline SET steps='${eventsStringified}' WHERE user_id=${user_id} AND company='${company}';`;

      db.query(updateEventsQuery, (err, data) => {
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
  const addApplicationQuery = `INSERT INTO Pipeline (user_id, company, active, steps) VALUES (${userId}, '${company}', true, '[]');`;

  db.query(addApplicationQuery, (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      console.log('Application has been added successfully.');
      return next();
    };
  });
};

module.exports = userController;