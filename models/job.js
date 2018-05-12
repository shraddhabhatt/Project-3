module.exports = function(sequelize, Sequelize) {

   var Job = sequelize.define('Job', {
       jobtitle: {
           type: Sequelize.STRING,
           notEmpty: true
       },
       companyname: {
           type: Sequelize.STRING,
           notEmpty: true
       },
       city: {
           type: Sequelize.STRING,
           notEmpty: true
       },
       state: {
           type: Sequelize.STRING,
           notEmpty: true
       },
       zip: {
           type: Sequelize.STRING,
           notEmpty: true
       },
       description: {
           type: Sequelize.TEXT
           notEmpty: true
       }
   });