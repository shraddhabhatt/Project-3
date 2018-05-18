// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

var database = require('./models');

var passport = require('passport');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
// Requiring our models for syncing
var db = require("./models");

var session = require('express-session');
// var FileStore = require('session-file-store')(session);

var cookieSession = require('cookie-session');
var cookieParser = require('cookie-parser');

// try {
//   rimraf.sync(path.join(__dirname, 'sessions'));
// } catch (e) {
//   // HOPE NOTHING GOES WRONG!
// }

// Sets up the Express app to handle data parsing
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
// Static directory
app.use(express.static("public"));
// Handlebars
_dirname = path.resolve();
app.use(express.static(_dirname + '/public'));
// app.set('views', path.join(_dirname, './views'));


// var sessionStore = new FileStore();
// // sessionStore.clear();
// app.use(session({
//     store: sessionStore,
//     secret: 'keyboard cat',
//     resave: true,
//     saveUninitialized: true,
// }));

// // Routing
// app.set('trust proxy', true);


// google
// googleAuth.initStrategy(passport);
// app.use(passport.initialize());
// app.use(googleAuth.router);

// app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(httpRoutes);
// app.use('/api', apiRoutes);

// db.sequelize.sync({}).then(function () {
//   console.log("Database connected.")
// }).catch(err => {
//   console.log("Failed to connect to database.", err);
// });
app.post("/signin", function(req, res) {
  console.log("inside serverside signin route");
  res.json({ "url" : "/Home" });
});
// =============================================================

// Syncing our sequelize models and then starting our Express app
// =============================================================

db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});