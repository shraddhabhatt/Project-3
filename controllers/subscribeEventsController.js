const db = require("../models");

module.exports = {

  create: function(req, res) {
    console.log("create function");

    db.EventsEmail
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