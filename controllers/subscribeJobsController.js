const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    console.log("find all emails for jobs! in subseventsController");
    db.JobsEmail
      .findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    console.log("create function");

    db.JobsEmail
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(error => {
        if (error.response) {
          dispatch(authError(error.response.data.error));
          console.log("error from controller");
        }
      });

  }
};