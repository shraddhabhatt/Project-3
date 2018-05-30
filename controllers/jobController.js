const db = require("../models");
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Job
      .findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("create function");
    db.Job
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(error => {
        if (error.response) {
          dispatch(authError(error.response.data.error));
        }
      });
  },
  remove: function(req, res) {
    db.job
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  sendjobemail: function(req, res) {
    console.log("send Emails jobs");
    var emailList = "";

    db.JobsEmail
      .findAll({})
      .then(dbModel => { 
            var results = JSON.stringify(dbModel);
            console.log("Events Emails FOUND !!!!!!! "+results);

            var jsonResults = JSON.parse(results);
            for (var i = 0; i < jsonResults.length; i++)
            {
              console.log(jsonResults[i].jobsemailid);
              emailList = emailList +','+ jsonResults[i].jobsemailid;
            }
            emailList = emailList.substring(1);

            console.log("Final LIST :::::: "+emailList);
            let transporter = nodemailer.createTransport({
              host: 'smtp.gmail.com',
              port: 465,
              auth: {
                  user: 'youtism.team@gmail.com',
                  pass: 'youtism4'
              }
          });
          let mailOptions = {
              from: '"Youtism" <youtism.team@gmail.com>', // sender address
              to: emailList, // list of receivers
              subject: 'You+ism has some new job opportunities added! ', // Subject line
              text: "A new job has been posted, please visit the site to get more details and we hope that turns out helpful for your kids", // plain text body
              html: '<h2>New Job has been posted to the You+ism portal</h2><p>Please visit the site to get more details</p><p>Hope that is helpful</p>' // html body
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
