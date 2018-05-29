const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Event
      .findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    
    let eventid = { id : req.params.id };

    db.Event
      .findAll({ where: eventid})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("create function");
    db.Event
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(error => {
        if (error.response) {
          dispatch(authError(error.response.data.error));
        }
      });
  },
  remove: function(req, res) {
    console.log("remove function");
    db.Event
      .findOne({ where: {
            $and: [{id : req.params.id}, {UserId : req.params.userid}]
       }})
      .then(dbModel => dbModel.destroy({
        where: {
          id: dbModel.id
        }
      }))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
