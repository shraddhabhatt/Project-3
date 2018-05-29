const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.User
      .findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("create function");
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(error => {
        if (error.response) {
          dispatch(authError(error.response.data.error));
        }
      });
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req, res) {
    
    let email = { email : req.params.email };
    console.log("Email inside ROUTER : "+email);
    db.User
      .findAll({ where: email})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
