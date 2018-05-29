const db = require("../models");
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');

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
  },
  findEmails: function(req, res) {
    console.log("find emails function");
    db.EventsEmail
      .findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  sendeventemail: function(req, res) {
    console.log("send Emails");
    var emailList = "";

    db.EventsEmail
      .findAll({})
      .then(dbModel => { 
            var results = JSON.stringify(dbModel);
            console.log("Events Emails FOUND !!!!!!! "+results);

            var jsonResults = JSON.parse(results);
            for (var i = 0; i < jsonResults.length; i++)
            {
              console.log(jsonResults[i].emailid);
              emailList = emailList +','+ jsonResults[i].emailid;
            }
            emailList = emailList.substring(1);

            console.log("Final LIST :::::: "+emailList);
            let transporter = nodemailer.createTransport({
              host: 'smtp.gmail.com',
              port: 465,
              secure: true,
              auth: {
                  user: 'trivedishraddha99@gmail.com',
                  pass: 'Shraddha$2212'
              }
          });
          let mailOptions = {
              from: '"Youtism" <trivedishraddha99@gmail.com>', // sender address
              to: emailList, // list of receivers
              subject: 'You+ism, Welcomes you to join our event! ', // Subject line
              text: "A new event has been registered, please visit the site to get more details and we hope to see you on the event day", // plain text body
              html: '<h2>New events have been added to the You+ism</h2><p>Please visit the site to get more details and it would be encouraging for the event organizer if you participate</p><p>Hope you join us at our upcoming event</p>' // html body
          };
    
          transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                  return console.log(error);
              }
              console.log('Message %s sent: %s', info.messageId, info.response);
                  res.render('index');
              });
        })
      .catch(err => res.status(422).json(err));
        
          
      
    }
};
